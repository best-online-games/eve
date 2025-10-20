# EVE Design System - GitHub Workflows

## Workflow

### `app.yml` - App deployment
- **Триггеры**: push в master/main, PR
- **Модули**: только `app`
- **Деплой**: приложение в GitHub Pages
- **URL**: `https://yourusername.github.io/mam/eve/app/-/`

## Настройка

1. **Добавьте секреты в GitHub:**
   - `GH_PAT` - Personal Access Token с правами на запись

2. **Включите GitHub Pages:**
   - Settings → Pages → Source: "GitHub Actions"

3. **Проверьте деплой:**
   - Actions tab → проверить выполнение workflow
   - Settings → Pages → увидеть URL сайта

## Локальная сборка

```bash
# Сборка app
mam build eve/app

# Запуск dev-сервера
mam
```

## Структура

- **Исходники**: `eve/app/`
- **Собранные файлы**: `eve/app/-/`
- **Точка входа**: `eve/app/index.html`
