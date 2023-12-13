---
sidebar_position: 2
---

# VSCode Settings JSON 个人配置

```json
{
  // 编辑器
  "editor.fontLigatures": true,
  "editor.accessibilitySupport": "off",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.find.addExtraSpaceOnTop": true,
  "editor.fontFamily": "Fira Code",
  "editor.fontSize": 15,
  "editor.fontWeight": "normal",
  "editor.lineHeight": 1.8,
  "editor.glyphMargin": true,
  "editor.guides.bracketPairs": "active",
  "editor.inlineSuggest.enabled": true,
  "editor.suggestSelection": "first",
  "editor.unicodeHighlight.invisibleCharacters": false,
  "editor.renderWhitespace": "trailing",
  "editor.minimap.enabled": false,
  "editor.bracketPairColorization.independentColorPoolPerBracketType": true,
  "editor.mouseWheelZoom": false,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.letterSpacing": 0.5,
  "editor.scrollbar.verticalScrollbarSize": 25,
  "editor.smoothScrolling": true,
  "editor.cursorBlinking": "blink",
  "editor.linkedEditing": true,
  "editor.unicodeHighlight.allowedLocales": {
    "zh-hant": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": "never",
    "source.fixAll.eslint": "never",
    "source.organizeImports": "never"
  },
  "editor.wordWrap": "on",
  "editor.acceptSuggestionOnEnter": "smart",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.quickSuggestions": {
    "other": "on",
    "comments": "off",
    "strings": "off"
  },
  "editor.formatOnSave": true,
  "editor.quickSuggestionsDelay": 10,
  "editor.detectIndentation": true,
  "editor.tabSize": 2,
  "editor.indentSize": "tabSize",
  "typescript.updateImportsOnFileMove.enabled": "always",
  // 资源管理器
  "explorer.compactFolders": false,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  // 工作台
  "workbench.editor.closeOnFileDelete": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.limit.enabled": true,
  "workbench.editor.limit.perEditorGroup": true,
  "workbench.editor.limit.value": 10,
  "workbench.list.smoothScrolling": true,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.tree.expandMode": "singleClick",
  "workbench.tree.indent": 15,
  "workbench.editor.splitInGroupLayout": "vertical",
  "workbench.colorCustomizations": {
    "tab.activeBackground": "#4e5666" // tab选中的颜色
  },
  "workbench.iconTheme": "a-file-icon-vscode",
  "workbench.productIconTheme": "a-file-icon-vscode-product-icon-theme",
  "workbench.editor.empty.hint": "hidden",
  "workbench.editor.tabActionLocation": "right",
  // window
  "window.autoDetectHighContrast": false,
  // 文件
  "files.simpleDialog.enable": true,
  "files.trimTrailingWhitespace": true,
  "files.autoSave": "onWindowChange",
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  // git
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.untrackedChanges": "separate",
  "git.openRepositoryInParentFolders": "never",
  "git-graph.date.format": "ISO Date & Time",
  // 终端
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.fontWeight": "400",
  "terminal.integrated.fontFamily": "Fira Code",
  "terminal.integrated.persistentSessionReviveProcess": "never",
  "terminal.integrated.tabs.enabled": true,
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.enableMultiLinePasteWarning": false,
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.env.osx": {
    "FIG_NEW_SESSION": "1"
  },
  // debug
  "debug.console.fontSize": 15,
  "debug.onTaskErrors": "debugAnyway",
  // css
  "css.lint.hexColorLength": "ignore",
  "css.format.spaceAroundSelectorSeparator": true,
  "css.lint.zeroUnits": "ignore",
  "less.format.spaceAroundSelectorSeparator": true,
  "css.customData": [".vscode/css_custom_data.json"],
  // 搜索
  "search.showLineNumbers": true,
  "search.exclude": {
    "**/.git": true,
    "**/.github": true,
    "**/.nuxt": true,
    "**/.output": true,
    "**/.pnpm": true,
    "**/.vscode": true,
    "**/.yarn": true,
    "**/bower_components": true,
    "**/dist/**": true,
    "**/logs": true,
    "**/node_modules": true,
    "**/out/**": true,
    "**/package-lock.json": true,
    "**/pnpm-lock.yaml": true,
    "**/tmp": true,
    "**/yarn.lock": true
  },
  // Mardown
  "markdown.preview.breaks": true,
  "markdown-preview-enhanced.previewTheme": "atom-light.css",
  "markdown-preview-enhanced.alwaysShowBacklinksInPreview": false,
  "markdown-preview-enhanced.codeBlockTheme": "github.css",
  "markdown-preview-enhanced.revealjsTheme": "simple.css",
  // 其余
  "scm.diffDecorationsGutterWidth": 2,
  "breadcrumbs.enabled": false,
  "security.workspace.trust.untrustedFiles": "open",
  "merge-conflict.autoNavigateNextConflict.enabled": true,
  // ===================
  // ===以下均为扩展设置===
  // ===================
  "extensions.autoUpdate": "onlyEnabledExtensions",
  "extensions.ignoreRecommendations": true,
  // ----
  "volar.autoCompleteRefs": true,
  "volar.codeLens.pugTools": false,
  "volar.preview.transparentGrid": true,
  "volar.codeLens.references": false,
  "volar.inlayHints.eventArgumentInInlineHandlers": false,
  // ----
  "prettier.enable": true,
  "prettier.printWidth": 120,
  "prettier.singleQuote": false,
  "prettier.tabWidth": 2,
  "prettier.semi": true,
  // ----
  "codesnap.containerPadding": "0.2em",
  "codesnap.shutterAction": "copy",
  // ----
  "gitlens.advanced.messages": {
    "suppressLineUncommittedWarning": true
  },
  "gitlens.defaultDateLocale": null,
  "gitlens.menus": false,
  "gitlens.heatmap.locations": ["line"],
  "gitlens.changes.locations": ["line"],
  "gitlens.blame.highlight.locations": ["gutter", "line", "overview"],
  "gitlens.hovers.currentLine.details": false,
  "gitlens.hovers.annotations.details": false,
  "gitlens.codeLens.scopes": ["containers"],
  "gitlens.hovers.currentLine.over": "line",
  "gitlens.graph.minimap.enabled": false,
  // ----
  "projectManager.sortList": "Recent",
  // ----
  "eslint.format.enable": true,
  // ----
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "scminput": false,
    "yaml": false
  },
  // ----
  "rust-analyzer.diagnostics.useRustcErrorCode": true,
  // ----
  "liveServer.settings.donotShowInfoMsg": true,
  // ----
  "todo-tree.general.showActivityBarBadge": true
}
```
