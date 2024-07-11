# React Native ile todo list uygulamasi

![Ekran Alıntısı](https://github.com/EmirKymz/ReactNative_Project/assets/99013427/4102566f-4c65-480b-bcde-c0627e34b12a)


![signup](https://github.com/EmirKymz/ReactNative_Project/assets/99013427/e0ede901-5741-41dc-8a25-076d5575c138)


![todo](https://github.com/EmirKymz/ReactNative_Project/assets/99013427/d2dc8d93-d730-4518-813e-96a439626514)

## React native ile proje oluşturmak
```
npx create-expo-app my-app
cd my-app
npx expo start
```

## useState
```
import React, { useState } from 'react';

const [state, setState] = useState(initialState);
```
bu şekilde bir kullanım ile state ve setState fonksiyonunu kullanabiliriz.
initialState, state'in tipine göre değişebilir. Örneğin bir string ise "" veya null, bir number ise 0, bir array ise [] şeklinde başlatılabilir.
state ve setstate fonksiyonu bir array döner. İlk eleman state'i, ikinci eleman ise state'i değiştiren fonksiyonu döner.

```
onChangeText={(text) => setState(text)}
value={name}
//veya
onChangeText={setState}
value={name}
```
gibi bir kullanım ile state'i değiştirebiliriz.

rnfes yazarak fonksiyonel component oluşturabiliriz.

## pressable
```
import { Pressable } from 'react-native';
<Pessable onPress={() => console.log('pressed')}>
  <Text>Press me</Text>
</Pressable>
```
Pressable componenti üzerine tıklandığında onPress fonksiyonunu çalıştırır.
## kaynak
```
https://icons.expo.fyi/Index
https://docs.swmansion.com/react-native-reanimated/docs/animations/withTiming
https://reactnative.dev/
github.com/Muhammed58
```
