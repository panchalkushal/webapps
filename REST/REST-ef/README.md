# REST
Application demonstrating basic principles of REST and EF. The application creates basic API endpoints to perform CRUD operations on **ShopItem** entity.

## Usage
The solution can be run through visual studio and requires 
- Microsoft .NET Core SDK 3.1.300
- Microsoft .NET Framework 4.8
- Microsoft ASP.NET MVC 4 Runtime

# EF commands

Open the folder where csproj file is and run following commands to install the Entity Framework Core Tool.

```
dotnet tool install --global dotnet-ef
dotnet ef migrations add Initial -o Data/Migrations
```

For any future changes to classes and to migrate those changes to Database run following command.
```
dotnet ef database update
```

## Motivation
To create a bare minimal application to showcase principles of REST and how to implement EF in .NET Core 3.1.0

### Example

- Add Item

```
POST <localhost>/api/ShopItems
```

```javascript
{
    "itemName": "Polo T-Shirt",
    "sku": "SIT222",
    "price": 14.99    
}
```
