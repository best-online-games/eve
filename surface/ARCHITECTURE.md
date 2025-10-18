# Surface Component Architecture

## Overview

Компонент `$ds_surface` — это базовый строительный блок для создания интерактивных и неинтерактивных поверхностей в дизайн-системе. Он обеспечивает систематический подход к стилизации через комбинацию **цвета**, **варианта отображения**, **размера** и **состояния**.

## Design Principles

### 1. Separation of Concerns

**Color** (что) + **Variant** (как) + **State** (когда) = **Visual Output**

- **Color**: семантическое значение (primary, danger, success...)
- **Variant**: способ отображения (solid, soft, outline, ghost)
- **State**: текущее состояние (enabled, hover, pressed, disabled, loading)
- **Size**: размер элемента (xs, sm, md, lg, xl)

Это разделение позволяет:
- Легко комбинировать параметры
- Масштабировать систему
- Избежать комбинаторного взрыва классов

### 2. CSS Custom Properties First

Вместо hardcoded значений используются CSS-переменные:

```css
/* ❌ Hardcoded - плохо */
background: oklch(55% 0.15 240deg);

/* ✅ CSS Variables - хорошо */
background: var(--ds_surface_primary_solid_bg);
```

**Преимущества:**
- Мгновенная смена темы без пересборки
- Возможность переопределения на уровне приложения
- Лучшая производительность (браузер оптимизирует)
- Упрощённая кастомизация для пользователей

### 3. Progressive Enhancement

Используется стратегия прогрессивного улучшения:

1. **Base**: HSL цвета (широкая поддержка)
2. **Enhanced**: OKLCH в `@supports` (современные браузеры)

```css
:root {
    --color: hsl(240deg, 60%, 50%);  /* fallback */
}

@supports(color: oklch(0% 0 0deg)) {
    :root {
        --color: oklch(55% 0.15 240deg);  /* enhanced */
    }
}
```

### 4. Systematic Naming

Naming convention для CSS-переменных:

```
--{namespace}_{component}_{color}_{variant}_{state?}_{property}
```

Примеры:
```css
--ds_surface_primary_solid_bg              /* Base state */
--ds_surface_primary_solid_hover_bg        /* Hover state */
--ds_surface_danger_outline_disabled_text  /* Disabled state */
```

**Упрощение: Border переменные**

Border цвета НЕ выделены в отдельные токены, т.к.:
- **solid/soft/ghost**: всегда `transparent` (хардкод в CSS)
- **outline**: динамически использует `color` (= `*_text` переменная)

Это сокращает количество токенов с ~450 до ~300 без потери функциональности.
