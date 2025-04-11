# Use official .NET SDK for building
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY ./src/TodoApi/*.csproj ./src/TodoApi/
RUN dotnet restore ./src/TodoApi

COPY ./src/TodoApi/. ./src/TodoApi/
WORKDIR /app/src/TodoApi
RUN dotnet publish -c Release -o out

# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/src/TodoApi/out ./

EXPOSE 5000
EXPOSE 5001

ENTRYPOINT ["dotnet", "TodoApi.dll"]
