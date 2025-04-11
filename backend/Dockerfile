# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ./src/TodoApi ./TodoApi
WORKDIR /src/TodoApi
RUN dotnet restore
RUN dotnet publish -c Release -o /app/publish

# Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 5257
ENTRYPOINT ["dotnet", "TodoApi.dll"]
