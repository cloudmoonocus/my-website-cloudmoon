---
sidebar_position: 1
tags:
  - 踩坑问题
---

- 首先在 cmd/powershell 上运行 `systeminfo`
  - 这将生成一个列表，您将在列表末尾找到**Hyper-V 要求**部分，其中包含 4 个要求的详细信息。如果满足这些要求，结果将显示为“是”。但是，如果您发现“在固件中启用虚拟化”状态为**否**，则需要使用下面的指南启用它
  - 在 Windows 11 电脑上安装/启用 Hyper-V 之前，请确保已从系统 BIOS 启用它。在上面的步骤中，如果您发现“在固件中启用虚拟化”状态为“否”，则需要启用它。操作方法如下：
    - 重新启动计算机并使用热键进入 BIOS 设置
    - 在 Bios 中查找“虚拟化”选项卡并单击它以启用。不同主板 Bios 选项不同，您可以百度搜索不同品牌 Bios 中启用虚拟化教程
    - 启用虚拟化
    - 保存新设置并退出 BIOS。系统现在将正常重新启动。重新启动后，请继续执行以下步骤以安装和启用 Hyper-V

- 安装 Hyper-v
  - 先在 txt 文件下输入，改扩展名字为 `.bat`，然后右键管理员运行就行了，等待都安装完成，安装很多个，然后输入 `Y` 重启就可以了

- 启用 Hyper-v
  - 直接在 cmd/powershell 运行，然后重启
    - `DISM /Online /Enable-Feature /All /FeatureName:Microsoft-Hyper-V`
    - 如何禁用: `DISM /Online /Disable-Feature /FeatureName:Microsoft-Hyper-V-all`
