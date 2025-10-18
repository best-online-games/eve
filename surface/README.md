# Surface Component Theme System

Компонент `$ds_surface` предоставляет базовую систему темизации для интерактивных и неинтерактивных поверхностей.

## Архитектура

### Цветовая палитра

**Адаптивные цвета** (наследуются от mol_theme):
- `primary` - основной цвет интерфейса (mol_theme_hue)
- `secondary` - вторичный цвет (mol_theme_hue + 90deg)
- `tertiary` - третичный цвет (mol_theme_hue - 90deg)

**Семантические цвета** (фиксированные hue):
- `danger` (0deg) - деструктивные действия, ошибки
- `warning` (45deg) - предупреждения, важные уведомления
- `success` (145deg) - успешные операции
- `info` (210deg) - информационные сообщения

**Уровни поверхностей** (неинтерактивные фоны):
- `lowest`, `low`, `medium`, `high`, `highest` - для создания визуальной иерархии

### Варианты отображения (Variants)

1. **solid** - заполненная поверхность с высоким контрастом
   - Насыщенный цветной фон
   - Белый/черный текст для максимальной читаемости
   - Используется для primary actions (CTA)

2. **soft** - мягкая поверхность с тонированным фоном
   - Полупрозрачный цветной фон (opacity ~0.15)
   - Цветной текст
   - Используется для вторичных элементов с меньшим визуальным весом

3. **outline** - обведенная поверхность
   - Прозрачный фон
   - Цветная рамка и текст
   - Используется для альтернативных действий

4. **ghost** - призрачная поверхность
   - Полностью прозрачная до взаимодействия
   - Минимальный визуальный вес
   - Используется для tertiary actions

### Состояния (States)

Каждый вариант поддерживает состояния:
- `enabled` - базовое состояние
- `hover` - наведение курсора
- `pressed` - активное нажатие
- `disabled` - недоступное состояние
- `loading` - процесс загрузки

### Размеры (Sizes)

- `xs` - extra small (28px height)
- `sm` - small (32px height)
- `md` - medium (40px height) - по умолчанию
- `lg` - large (48px height)
- `xl` - extra large (56px height)

## Использование CSS переменных

### Структура переменных

```
--ds_surface_{color}_{variant}_{property}
--ds_surface_{color}_{variant}_{state}_{property}
```

Примеры:
```css
/* Базовое состояние */
--ds_surface_primary_solid_bg
--ds_surface_primary_solid_text

/* Состояния hover/pressed */
--ds_surface_primary_solid_hover_bg
--ds_surface_primary_solid_pressed_bg

/* Disabled состояние */
--ds_surface_primary_solid_disabled_bg
--ds_surface_primary_solid_disabled_text
```

**Note о border:** Border цвета не выделены в отдельные переменные, т.к.:
- **solid/soft/ghost**: всегда `transparent`
- **outline**: использует цвет из `*_text` переменной (следует за текстом)

### Пример применения

```css
[ds_surface_color="primary"][ds_surface_variant="solid"] {
  background: var(--ds_surface_primary_solid_bg);
  color: var(--ds_surface_primary_solid_text);
  border: var(--ds_surface_border_width) solid transparent;
}

[ds_surface_color="primary"][ds_surface_variant="outline"] {
  background: transparent;
  color: var(--ds_surface_primary_outline_text);
  border: var(--ds_surface_border_width) solid var(--ds_surface_primary_outline_text);
}

[ds_surface_state="hover"] {
  background: var(--ds_surface_primary_solid_hover_bg);
  /* Border автоматически следует за color для outline */
}
```

## Технические детали

### oklch vs hsl

Файл темы использует прогрессивное улучшение:
1. Базовые hsl значения для совместимости
2. oklch значения в `@supports` блоке для современных браузеров

**Преимущества oklch:**
- Перцептивная однородность цвета
- Лучшая предсказуемость при изменении lightness/chroma
- Более широкая цветовая гамма

### Наследование от mol_theme

Система наследует базовые параметры:
- `--mol_theme_hue` - базовый оттенок темы
- `--mol_theme_hue_spread` - расстояние между триадными цветами (90deg)

Это обеспечивает согласованность с глобальной темой приложения.
