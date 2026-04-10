# JavaScript Fetch - Cheat Sheet

```
fetch(url, option).then().catch();
fetch(url)
  .then((response) => {})
  .then((data) => {})
  .catch((error) => {});
```

ขั้นตอนการดึงข้อมูล

1. fetch จาก url ที่ระบุบ และอาจมีใส่ api key / header ใน option
2. จะส่ง object กลับมาให้เราด้วย then response และแปลงข้อมูลเป็น js / then มีได้หลายอันได้
3. catch ถ้า Error จะแสดงตรงนี้
