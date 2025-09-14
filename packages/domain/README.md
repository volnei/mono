# @mono/domain

This package contains the domain logic of the application. It is responsible for defining the business logic of the application and providing an interface for the features to interact with the domain.

The domain logic is split into several services, each responsible for a specific part of the business logic. The services are then composed together to form the domain interface.

The domain package is a workspace package and is therefore not published to npm. It is meant to be used internally by the application and should not be imported by external applications.

## Folders

-/internal: Contains the internal domain logic, including the services and the types. The internal folder is not meant to be imported directly by external applications.

-/features: Contains the feature-related domain logic, including the services and the types. The features folder is meant to be imported directly by external applications, e.g.: features

