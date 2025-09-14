# `@mono/features`

This package contains the feature logic of the application. It is responsible for providing an interface for the domain to interact with the features.

The features are split into several services, each responsible for a specific part of the feature logic. The services are then composed together to form the feature interface.

The features package is a workspace package and is therefore not published to npm. It is meant to be used internally by the application and should not be imported by external applications.

It's not allowed to import internal services (eslint rule)