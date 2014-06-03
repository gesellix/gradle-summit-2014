#From Maven to Gradle with Docker in a multi-product pipeline

[Presentation](http://gradlesummit.com/conference/santa_clara/2014/06/session?id=31615) for the 
[Gradle Summit 2014](http://gradlesummit.com/conference/santa_clara/2014/06/session?id=31615)

[Slides](https://speakerdeck.com/gesellix/from-maven-to-gradle-with-docker-in-a-multi-product-pipeline)

## Abstract

Coming from a multi-module project with about 300 Maven pom.xmls,
we now use Gradle to build our artifacts and deliver our Docker based web applications.

We started with a Maven multi-module project being converted to Gradle
during a hack day and were impressed by the ease of use and the expressive build scripts of Gradle.
While some issues couldn't be resolved out of the box, we now use Gradle as tool of choice
for a new project of our platform. This new project is based on Docker as runtime environment
and we use Gradle to build, push and run our Docker containers.

You'll learn how we managed to migrate to a Gradle based build with some details
on less intuitive ways to solve our needs and common pitfalls.
You'll also learn how we currently use Gradle in one of our projects to implement
a continuous deployment pipeline including Docker and blue-green deployments.
