# My first React Native App

This is my first **React Native App**. It was made to acquire knowledge and experience on mobile app development with react native opensource UI software framework. In addition, we have develop in conjunction with **Expo Framework**.


# What does it do?

This app generates **random passwords** and implements **two general usecase**:

> 1. Generate and save the **random password** in local storage;
> 2. Manage passowrds in the local storage.


And then you can save, copy to clipboard and delete a passowrd from local satorage.

# Update

we intend migrating this app to Expo-Router app. Only to improve our knowledge. 


# Starting migration to Expo Router and TypeScript

Here we going to migrate an existing project in expo to use expo-router and typescript. 
To do this, follow the steps bellow.

## 1. Setup to user Expo Router


1. Install the [**expo-route**](https://docs.expo.dev/router/installation/#manual-installation);
    
    ```
    npx expo install expo-router
    ```
    
2. Setup entry point:

    In package.json do this:
        
    ```
    {
        "main": "expo-router/entry"
    }
    ```

3. Add the line bellow in **app.json**

    ```
    {
      "scheme": "your-app-scheme"
    }
    ```
    

**Note!** Before you restart your app, make sure that **bundler cache was cleaned**

```
    npx expo start -c
```


## 2. Setup to use TypeScript

To setup Typescript in in an exiting project, [**see how to do it**](https://docs.expo.dev/guides/typescript/).
