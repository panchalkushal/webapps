## webapps
Web applications written by me.

# REST
Application demonstrating basic principles of REST and EF.

## Usage
The solution can be run through visual studio and requires 
- Microsoft .NET Core SDK 3.1.300
- Microsoft .NET Framework 4.8
- Microsoft ASP.NET MVC 4 Runtime

## Motivation
To create a bare minimal application to showcase principles of REST and how to implement EF in .NET Core 3.1.0

## Example

- Add Item

POST https://<localhost>/api/ShopItems

```javascript
{
    "itemName": "Polo T-Shirt",
    "sku": "SIT222",
    "price": 14.99    
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)