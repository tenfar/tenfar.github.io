
## 引言

在 Java 开发中，处理 XML 数据是一个常见的需求。**XStream** 是一个简单易用的 Java 库，用于将 Java 对象序列化为 XML，或将 XML 反序列化为 Java 对象。本文将详细介绍如何使用 XStream 将 XML 数据转换为 Java Bean。

## 正文

### 1. XStream 简介

XStream 是一个开源的 Java 库，用于对象和 XML 之间的序列化和反序列化。它具有以下特点：

- **简单易用**：XStream 的 API 设计简洁，易于上手。
- **灵活性**：支持自定义转换器和别名，以满足不同的需求。
- **高性能**：XStream 在处理大量数据时表现出色。

XStream 的官方文档：[XStream 官方文档](https://x-stream.github.io/)

### 2. XStream 的注解

- **@XStreamAlias("alias")**：当 Java 对象在 XML 中以标签的形式显示时，如果名字与类名或者属性名不一致，可以使用该标签并在括号内注明别名。
- **@XStreamOmitField**：在输出 XML 的时候忽略该属性。
- **@XStreamImplicit**：如果该属性是一个列表或者数组，在 XML 中不显示 list 或者 Array 字样。
- **@XStreamAsAttribute**：该属性不单独显示成 XML 节点，而是作为属性显示出来。
- **@XStreamContainedType**：用于指定包含类型。
- **@XStreamConverter**：设置转换器。
- **@XStreamConverters**：converter 主要用于将某些字段进行复杂的转换，转换过程写在一个类中，然后将其注册到 XStream。

### 3. 添加 XStream 依赖

首先，需要在项目中添加 XStream 的依赖。如果使用 Maven 构建工具，可以在 `pom.xml` 文件中添加以下依赖：

```xml
<dependency>
    <groupId>com.thoughtworks.xstream</groupId>
    <artifactId>xstream</artifactId>
    <version>1.4.19</version>
</dependency>
```

### 4. 定义 Java Bean

在将 XML 转换为 Java 对象之前，需要定义一个 Java Bean 类。以下是一个简单的 Java Bean 示例：

```java
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.thoughtworks.xstream.annotations.XStreamAlias;

@Data
@AllArgsConstructor
@NoArgsConstructor
@XStreamAlias("person")
public class Person {
    @XStreamAlias("name")
    private String name;
    @XStreamAlias("age")
    private int age;
}
```

### 5. 将 XML 转换为 Java Bean

使用 XStream 将 XML 转换为 Java Bean 的步骤如下：

1. **创建 XStream 实例**：首先需要创建一个 `XStream` 实例。
2. **设置别名**：可以为类和字段设置别名，以便在 XML 中使用不同的名称。
3. **反序列化 XML**：使用 `fromXML` 方法将 XML 字符串转换为 Java 对象。

以下是一个完整的示例代码：

```java
import com.thoughtworks.xstream.XStream;

public class XStreamExample {
    public static void main(String[] args) {
        // 创建 XStream 实例
        XStream xstream = new XStream();

        // 设置别名
        xstream.alias("person", Person.class);

        // XML 字符串
        String xml = "<person><name>John Doe</name><age>30</age></person>";

        // 将 XML 转换为 Java 对象
        Person person = (Person) xstream.fromXML(xml);

        // 输出结果
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
    }
}
```

在这个示例中：

- 创建了一个 `XStream` 实例。
- 为 `Person` 类设置了别名 `person`。
- 使用 `fromXML` 方法将 XML 字符串转换为 `Person` 对象。
- 输出了 `Person` 对象的属性。

### 6. 处理复杂 XML 结构

XStream 支持处理复杂的 XML 结构，包括嵌套元素和集合。以下是一个包含嵌套元素和集合的示例：

```java
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.thoughtworks.xstream.annotations.XStreamAlias;
import com.thoughtworks.xstream.annotations.XStreamImplicit;
import com.thoughtworks.xstream.annotations.XStreamAsAttribute;

@Data
@AllArgsConstructor
@NoArgsConstructor
@XStreamAlias("person")
public class Person {
    @XStreamAsAttribute
    @XStreamAlias("name")
    private String name;

    @XStreamAsAttribute
    @XStreamAlias("age")
    private int age;

    @XStreamImplicit(itemFieldName = "hobby")
    private List<String> hobbies;
}

@Data
@AllArgsConstructor
@NoArgsConstructor
@XStreamAlias("hobbies")
public class Hobbies {
    private List<String> hobbies;
}
```

重命名注解：`@XStreamAlias()`
省略集合根节点：`@XStreamImplicit`
把字段节点设置成属性：`@XStreamAsAttribute`
这些命名都需要和解析的xml的属性名一一对应，一旦不对应就会报`com.thoughtworks.xstream.mapper.CannotResolveClassException`异常，找不到对应的类属性
集合属性的需要使用：`@XStreamImplicit`，不然会报`com.thoughtworks.xstream.converters.reflection.AbstractReflectionConverter$DuplicateFieldException`转换器映射异常

对应的 XML 示例：

```xml
<person>
    <name>John Doe</name>
    <age>30</age>
    <hobbies>
        <hobby>Reading</hobby>
        <hobby>Traveling</hobby>
    </hobbies>
</person>
```

使用 XStream 进行转换的代码如下：

```java
import com.thoughtworks.xstream.XStream;

public class XStreamExample {
    public static void main(String[] args) {
        // 创建 XStream 实例
        XStream xstream = new XStream();

        // 设置别名
        xstream.alias("person", Person.class);
        xstream.alias("hobby", String.class);

        // XML 字符串
        String xml = "<person><name>John Doe</name><age>30</age><hobbies><hobby>Reading</hobby><hobby>Traveling</hobby></hobbies></person>";

        // 将 XML 转换为 Java 对象
        Person person = (Person) xstream.fromXML(xml);

        // 输出结果
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
        System.out.println("Hobbies: " + person.getHobbies());
    }
}
```

### 7. 转换工具类

为了方便使用,写个转换的工具类

```java
public class XsteamUtil {
    public static Object toBean(Class<?> clazz, String xml) {
        Object xmlObject = null;
        XStream xstream = new XStream();
        xstream.processAnnotations(clazz);
        xstream.autodetectAnnotations(true);
        xmlObject= xstream.fromXML(xml);
        return xmlObject;
    }
}
```

传参也是一样，`Class<?> clazz`:指定我们需要转换的对象，`xml`:需要转的xml字符串
这样工具类就写好了

## 拓展了解

XStream 提供了很多方法供我们使用：

- **autodetectAnnotations()**：自动检测注解。
- **processAnnotations()**：应用传过来的类的注解。
- **fromXML()**：XML 反序列化（JSON 也是一样）。
- **toXML()**：XML 序列化（JSON 也是一样）。

### 自定义解析器

- XStream 序列化 XML，解析器用 **StaxDriver**：

  ```java
  XStream xstream = new XStream(new StaxDriver());
  ```

- XStream 序列化 JSON，解析器用 **JettisonMappedXmlDriver**：

  ```java
  XStream xstream = new XStream(new JettisonMappedXmlDriver());
  ```

也可以不具体指定解析器，也是没问题的。

## 深入了解

```java
XStream xstream = new XStream();
// 默认情况下，XStream会采用Xpp3库，XPP3是一种运行效率非常高的XML全解析实现。
// 如果你不想依靠Xpp3库，可以使用标准的JAXP DOM解析器进行初始化：
XStream xstream = new XStream(new DomDriver());
// 此xstream实例是线程安全的，可以供多个线程共享使用。
// 系统提供了多种解析器供我们选择，包括：`DomDriver`、`JDomDriver`、`StaxDriver`等。
```

XStream还提供了对JSON的支持，内置了两个Driver：

1. **JsonHierarchicalStreamDriver**：不依赖其他类库，仅实现 `obj`  -> `JSON`。
2. **JettisonMappedXmlDriver**：依赖jettison类库，实现 `JSON` -> `obj` 或 `obj` -> `JSON`。

这两种Driver在处理相同设置的Object时会生成不同的JSON串，`JsonHierarchicalStreamDriver`生成的串更简洁，正如官网所述。
需要注意的是，`JsonHierarchicalStreamDriver`默认输出带格式的JSON串，结构中包含空格和换行，并且没有提供修饰方式。

## 结论

本文介绍了如何使用 XStream 将 XML 转换为 Java Bean，并处理复杂的 XML 结构。XStream 是一个功能强大且易于使用的工具，适用于处理各种 XML 数据。建议进一步了解 XStream 的高级特性，如自定义转换器和别名，以应对更复杂的需求。

## 进一步学习建议

- **自定义转换器**：学习如何编写自定义转换器，以处理特定类型的数据。
- **别名和注解**：了解如何使用别名和注解来简化 XML 和 Java 对象之间的映射。
- **安全性配置**：学习如何配置 XStream 的安全性选项，以防止潜在的安全风险。

通过深入学习这些高级特性，读者可以更好地利用 XStream 来处理复杂的 XML 数据转换任务。
