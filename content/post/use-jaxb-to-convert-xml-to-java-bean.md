---
title: "使用 JAXB 将 XML 转换为 Java Bean"
date: 2024-10-28T14:43:07+08:00
lastmod: 2024-10-28T14:43:07+08:00
draft: false
keywords: [Jaxb, XML, Java Bean]
description: "本文介绍了如何使用 JAXB 将 XML 数据转换为 Java Bean，并处理复杂的 XML 结构。"
tags: [Jaxb, XML, Java Bean]
categories: [Java]
author: "Tenfar"

# You can also close(false) or open(true) something for this content.
# P.S. comment can only be closed
comment: false
toc: true
autoCollapseToc: false
postMetaInFooter: false
hiddenFromHomePage: false
# You can also define another contentCopyright. e.g. contentCopyright: "This is another copyright."
contentCopyright: false
reward: false
mathjax: false
mathjaxEnableSingleDollar: false
mathjaxEnableAutoNumber: false

# You unlisted posts you might want not want the header or footer to show
hideHeaderAndFooter: false

# You can enable or disable out-of-date content warning for individual post.
# Comment this out to use the global config.
#enableOutdatedInfoWarning: false

flowchartDiagrams:
  enable: false
  options: ""

sequenceDiagrams: 
  enable: false
  options: ""





---

## 引言

在 Java 开发中，处理 XML 数据是一个常见的需求。**JAXB** 是一个标准的 Java 技术，用于将 XML 数据绑定到 Java 对象。本文将详细介绍如何使用 JAXB 将 XML 数据转换为 Java Bean。

## 正文

### 1. JAXB 简介

JAXB 是 Java Architecture for XML Binding 的缩写，是一种用于将 XML 数据绑定到 Java 对象的技术。它提供了一种简单的方法，可以根据 XML Schema 自动生成 Java 类，也可以将 XML 实例文档反向生成 Java 对象树，并能将 Java 对象树的内容重新写到 XML 实例文档。

JAXB 2.0 是 JDK 1.6 的一部分，无需下载第三方 jar 包即可使用。JAXB 2.0 使用了 JDK 的新特性，如 Annotation、GenericType 等，需要在即将转换的 Java Bean 中添加 annotation 注解。

### 2. JAXB 的主要注解

JAXB 提供了许多注解，用于控制 XML 和 Java 对象之间的映射关系。以下是一些常用的注解：

- **@XmlRootElement**：将 Java 类或枚举类型映射到 XML 元素。
- **@XmlElement**：将 Java 类的一个属性映射到与属性同名的一个 XML 元素。
- **@XmlAttribute**：将 Java 类的一个属性映射到与属性同名的一个 XML 属性。
- **@XmlType**：将 Java 类或枚举类型映射到 XML 模式类型。
- **@XmlAccessorType**：控制字段或属性的序列化。`FIELD` 表示 `JAXB` 将自动绑定 Java 类中的每个非静态的（static）、非瞬态的（由 `@XmlTransient` 标注）字段到 XML。其他值还有 `XmlAccessType.PROPERTY` 和 `XmlAccessType.NONE`。
- **@XmlAccessorOrder**：控制 JAXB 绑定类中属性和字段的排序。
- **@XmlJavaTypeAdapter**：使用定制的适配器（即扩展抽象类 XmlAdapter 并覆盖 marshal() 和 unmarshal() 方法），以序列化 Java 类为 XML。
- **@XmlElementWrapper**：对于数组或集合（即包含多个元素的成员变量），生成一个包装该数组或集合的 XML 元素（称为包装器）。

### 3. 使用 JAXB

首先，需要在 Java Bean 上加上相关注解。以下是一个简单的 Java Bean 示例：

```java
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@Data
@AllArgsConstructor
@NoArgsConstructor
@XmlRootElement(name = "city")
public class City {
    @XmlAttribute(name = "id")
    private String cityId;
    @XmlElement(name = "name")
    private String cityName;
    @XmlElement(name = "code")
    private String cityCode;
    @XmlElement(name = "province")
    private String province;
}
```

在这个示例中，我们使用了 @XmlRootElement、@XmlAttribute、@XmlElement 注解，将 Java 类的属性映射到 XML 元素或属性。

### 4. 使用 JAXBContext 和 Marshaller

JAXB 提供了 JAXBContext 类和 Marshaller 接口，用于管理 XML/Java 绑定信息，以及将 Java 对象序列化为 XML 数据。以下是一个简单的示例：

```java
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import java.io.StringWriter;

public class JAXBExample {
    public static void main(String[] args) {
        try {
            // 创建 JAXBContext 实例
            JAXBContext jaxbContext = JAXBContext.newInstance(City.class);

            // 创建 Marshaller 实例
            Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

            // 设置 Marshaller 属性
            jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

            // 创建 Java 对象
            City city = new City("1", "Shanghai", "021", "Shanghai");

            // 将 Java 对象序列化为 XML
            StringWriter sw = new StringWriter();
            jaxbMarshaller.marshal(city, sw);
            String xmlString = sw.toString();
            System.out.println(xmlString);
        } catch (JAXBException e) {
            e.printStackTrace();
        }
    }
}
```

在这个示例中，我们创建了一个 JAXBContext 实例，然后使用它创建了一个 Marshaller 实例。我们还设置了 Marshaller 的属性，使其输出的 XML 数据格式化。最后，我们创建了一个 City 对象，将其序列化为 XML，并将 XML 数据输出到控制台。

### 5. 使用 Unmarshaller

JAXB 还提供了 Unmarshaller 接口，用于将 XML 数据反序列化为 Java 对象。以下是一个简单的示例：

```java
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.StringReader;

public class JAXBExample {
    public static void main(String[] args) {
        try {
            // 创建 JAXBContext 实例
            JAXBContext jaxbContext = JAXBContext.newInstance(City.class);

            // 创建 Unmarshaller 实例
            Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

            // 创建 XML 字符串
            String xmlString = "<city id=\"1\"><name>Shanghai</name><code>021</code><province>Shanghai</province></city>";

            // 将 XML 反序列化为 Java 对象
            StringReader reader = new StringReader(xmlString);
            City city = (City) jaxbUnmarshaller.unmarshal(reader);
            System.out.println(city);
        } catch (JAXBException e) {
            e.printStackTrace();
        }
    }
}
```

在这个示例中，我们创建了一个 JAXBContext 实例，然后使用它创建了一个 Unmarshaller 实例。我们还创建了一个 XML 字符串，将其反序列化为 City 对象，并将 City 对象输出到控制台。

### 6. 处理复杂的 XML 结构

JAXB 提供了对复杂 XML 结构的支持，包括嵌套元素、数组和集合。以下是一个示例，展示了如何使用 JAXB 处理复杂的 XML 结构：

```java
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.StringReader;

public class JAXBExample {
    public static void main(String[] args) {
        try {
            // 创建 JAXBContext 实例
            JAXBContext jaxbContext = JAXBContext.newInstance(Person.class);

            // 创建 Unmarshaller 实例
            Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

            // 创建 XML 字符串
            String xmlString = "<person id=\"1\"><name>John Doe</name><age>30</age><hobbies><hobby>Reading</hobby><hobby>Traveling</hobby></hobbies></person>";

            // 将 XML 反序列化为 Java 对象
            StringReader reader = new StringReader(xmlString);
            Person person = (Person) jaxbUnmarshaller.unmarshal(reader);
            System.out.println(person);
        } catch (JAXBException e) {
            e.printStackTrace();
        }
    }
} 
```

### 7. 使用 Maven 插件从 XSD 生成 Java 类

使用 JAXB，可以从 XSD 文件生成 Java 类。为此，我们需要在 Maven 项目的 `pom.xml` 文件中添加以下插件配置：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.codehaus.mojo</groupId>
            <artifactId>jaxb2-maven-plugin</artifactId>
            <version>3.2.0</version>
            <executions>
                <execution>
                    <goals>
                        <goal>xjc</goal>
                    </goals>
                </execution>
            </executions>
            <configuration>
                <schemaDirectory>${project.basedir}/src/main/resources</schemaDirectory>
                <outputDirectory>${project.build.directory}/generated-sources/jaxb</outputDirectory>
                <clearOutputDir>false</clearOutputDir>
            </configuration>
        </plugin>
    </plugins>
</build>
```

在上面的配置中，我们指定了 XSD 文件的位置为 `src/main/resources`，生成的 Java 类将被输出到 `target/generated-sources/jaxb` 目录中。

一旦配置了插件，我们可以在 Maven 项目中执行以下命令来生成 Java 类：

```bash
mvn clean generate-sources
```

这将根据 XSD 文件生成对应的 Java 类，我们可以在 Java 代码中使用这些类来处理 XML 数据。

## 结论

本文介绍了如何使用 JAXB 将 XML 数据转换为 Java Bean。JAXB 是一个功能强大且易于使用的工具，适用于处理各种 XML 数据。建议进一步了解 JAXB 的高级特性，如自定义转换器和别名，以应对更复杂的需求。
