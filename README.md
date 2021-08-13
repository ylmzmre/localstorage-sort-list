Open https://ylmzmre.github.io/hepsi-case/ to view it in the browser.

# hepsi-case

• Uygulamanın ilk ekranı listedir. Add link girilerek liste oluşturulmalıdır. Burada girilen kayıtlardaki kural en son girilen en başta olucak şekilde yapılmıştır.
• UP-VOTE ve DOWN-VOTE butonları ile arttırma, azaltma işlemleri 
yapılabilir. Oy sayısı yüksek olan bir üste çıkacaktır. Çıktığı sıralamada oylar 
eşit ise en son oyu değiştirilen en üstte olacak şekilde sıralanacaktır.
• Buradaki senaryoya göre eklenen datalar {linkname, urlname, like, time} 
olarak tutuluyor. Ilk karşılaştırma “like” için eşitlik olanlar arasında “time” 
için karşılaştırma yapılıyor.
• Select box ile en çok oy alan veya en az oy alan şekilde sıralama 
yapılmaktadır.
• Add link bölümünde ekleme gerçekleşti ise success notification eklenen link 
name alarak ekrana çıkacaktır.
• Eklenen linkler 5 ’ten fazla ise liste 5’li gruplar halinde listelenmektedir. 
• Link hover olduğunda Sil butonu çıkmakta olup tıklanması durumda uyarı 
modalı açılmaktadır. Silme işlemi gerçekleşirse silinen link name yazılı 
notification uyarı ekrana çıkacaktır.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
