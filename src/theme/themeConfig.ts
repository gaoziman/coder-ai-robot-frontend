// 定义基础色彩系统
export const colors = {
    primary: '#6366f1',
    primaryHover: '#818cf8',
    primaryPressed: '#4f46e5',
    primarySuppl: '#c7d2fe',

    info: '#2080f0',
    infoHover: '#4098fc',
    infoPressed: '#1060c9',
    infoSuppl: '#c9e0ff',

    success: '#18a058',
    successHover: '#36ad6a',
    successPressed: '#0c7a43',
    successSuppl: '#cdf0dd',

    warning: '#f0a020',
    warningHover: '#fcb040',
    warningPressed: '#c97c10',
    warningSuppl: '#fde8c3',

    error: '#d03050',
    errorHover: '#de576d',
    errorPressed: '#ab1f3f',
    errorSuppl: '#f8d0d9',

    // 文字颜色
    textBase: '#333333',
    textSecondary: '#666666',
    textTertiary: '#999999',
    textDisabled: '#c0c4cc',
    textInverse: '#ffffff',

    // 背景颜色
    bodyColor: '#f5f7fa',
    cardColor: '#ffffff',
    modalColor: '#ffffff',
    popupColor: '#ffffff',
    tooltipColor: 'rgba(51, 51, 51, 0.95)',

    // 边框颜色
    borderColor: '#e5e6eb',
    borderColorLight: '#f2f3f5',
    dividerColor: '#ebedf0',
}

// 定义主题覆盖对象
export const themeOverrides = {
    common: {
        // 基础色彩
        primaryColor: colors.primary,
        primaryColorHover: colors.primaryHover,
        primaryColorPressed: colors.primaryPressed,
        primaryColorSuppl: colors.primarySuppl,

        infoColor: colors.info,
        infoColorHover: colors.infoHover,
        infoColorPressed: colors.infoPressed,
        infoColorSuppl: colors.infoSuppl,

        successColor: colors.success,
        successColorHover: colors.successHover,
        successColorPressed: colors.successPressed,
        successColorSuppl: colors.successSuppl,

        warningColor: colors.warning,
        warningColorHover: colors.warningHover,
        warningColorPressed: colors.warningPressed,
        warningColorSuppl: colors.warningSuppl,

        errorColor: colors.error,
        errorColorHover: colors.errorHover,
        errorColorPressed: colors.errorPressed,
        errorColorSuppl: colors.errorSuppl,

        // 文字颜色
        textColor: colors.textBase,
        textColorSecondary: colors.textSecondary,
        textColorTertiary: colors.textTertiary,
        textColorDisabled: colors.textDisabled,

        // 背景颜色
        bodyColor: colors.bodyColor,
        cardColor: colors.cardColor,
        modalColor: colors.modalColor,
        popoverColor: colors.popupColor,
        tooltipColor: colors.tooltipColor,

        // 边框样式
        borderColor: colors.borderColor,
        borderColorDisabled: colors.borderColorLight,
        dividerColor: colors.dividerColor,
        borderRadius: '6px',

        // 字体设置
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
        fontWeight: '400',
        fontWeightStrong: '500',

        // 尺寸设置
        heightTiny: '22px',
        heightSmall: '28px',
        heightMedium: '34px',
        heightLarge: '40px',
        heightHuge: '48px',

        // 过渡动效
        cubicBezierEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        cubicBezierEaseOut: 'cubic-bezier(0, 0, 0.2, 1)',
        cubicBezierEaseIn: 'cubic-bezier(0.4, 0, 1, 1)',

        // 增强过渡效果
        cubicBezierEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        cubicBezierEaseOut: 'cubic-bezier(0, 0, 0.2, 1)',
        cubicBezierEaseIn: 'cubic-bezier(0.4, 0, 1, 1)',

        // 自定义过渡时间
        animationDuration: '0.3s',
        animationDurationQuick: '0.15s',
        animationDurationSlow: '0.5s',
    },

    // 表单类组件
    // ===============================

    // 按钮
    Button: {
        textColorPrimary: colors.textInverse,
        textColorInfo: colors.textInverse,
        textColorSuccess: colors.textInverse,
        textColorWarning: colors.textInverse,
        textColorError: colors.textInverse,
        borderRadiusSmall: '4px',
        borderRadiusMedium: '6px',
        borderRadiusLarge: '8px',
        fontWeight: 500,
        opacityDisabled: 0.65,
    },

    // 输入框
    Input: {
        color: colors.cardColor,
        colorFocus: colors.cardColor,
        colorDisabled: colors.borderColorLight,
        border: `1px solid ${colors.borderColor}`,
        borderHover: `1px solid ${colors.primary}`,
        borderFocus: `1px solid ${colors.primary}`,
        borderDisabled: `1px solid ${colors.borderColorLight}`,
        boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
        borderRadius: '6px',
        placeholderColor: colors.textTertiary,
        placeholderColorDisabled: colors.textDisabled,
        textColor: colors.textBase,
        textColorDisabled: colors.textDisabled,
    },

    // 数字输入框
    InputNumber: {
        color: colors.cardColor,
        colorDisabled: colors.borderColorLight,
        border: `1px solid ${colors.borderColor}`,
        borderHover: `1px solid ${colors.primary}`,
        borderFocus: `1px solid ${colors.primary}`,
        borderDisabled: `1px solid ${colors.borderColorLight}`,
        borderRadius: '6px',
        boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
        textColor: colors.textBase,
        textColorDisabled: colors.textDisabled,
        buttonColor: colors.bodyColor,
        buttonColorHover: colors.borderColorLight,
    },

    // 选择器
    Select: {
        peers: {
            InternalSelection: {
                borderRadius: '6px',
                color: colors.cardColor,
                boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
                border: `1px solid ${colors.borderColor}`,
                borderHover: `1px solid ${colors.primary}`,
                borderFocus: `1px solid ${colors.primary}`,
                borderDisabled: `1px solid ${colors.borderColorLight}`,
                textColor: colors.textBase,
                placeholderColor: colors.textTertiary,
            },
            InternalSelectMenu: {
                borderRadius: '6px',
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
                color: colors.cardColor,
            }
        }
    },

    // 级联选择
    Cascader: {
        peers: {
            InternalSelection: {
                borderRadius: '6px',
                boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
            },
            CascaderMenu: {
                borderRadius: '6px',
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
                color: colors.cardColor,
            }
        }
    },

    // 日期选择器
    DatePicker: {
        itemTextColorActive: colors.textInverse,
        itemColorHover: `rgba(99, 102, 241, 0.1)`,
        itemColorActive: colors.primary,
        borderRadius: '6px',
        boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
        panelColor: colors.cardColor,
        panelBoxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
        peers: {
            InternalSelection: {
                borderRadius: '6px',
                boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
            }
        }
    },

    // 时间选择器
    TimePicker: {
        itemTextColorActive: colors.textInverse,
        itemColorHover: `rgba(99, 102, 241, 0.1)`,
        itemColorActive: colors.primary,
        borderRadius: '6px',
        panelColor: colors.cardColor,
        panelBoxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
        peers: {
            InternalSelection: {
                borderRadius: '6px',
                boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
            }
        }
    },

    // 复选框
    Checkbox: {
        borderRadius: '2px',
        color: colors.cardColor,
        colorDisabled: colors.borderColorLight,
        colorChecked: colors.primary,
        colorCheckedDisabled: colors.primarySuppl,
        boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
        textColor: colors.textBase,
        textColorDisabled: colors.textDisabled,
        border: `1px solid ${colors.borderColor}`,
        borderDisabled: `1px solid ${colors.borderColorLight}`,
        borderChecked: `1px solid ${colors.primary}`,
        borderCheckedDisabled: `1px solid ${colors.primarySuppl}`,
    },

    // 单选框
    Radio: {
        buttonColor: colors.cardColor,
        buttonColorActive: colors.cardColor,
        buttonTextColor: colors.textBase,
        buttonTextColorActive: colors.primary,
        buttonBorderColor: colors.borderColor,
        buttonBorderColorActive: colors.primary,
        buttonBorderRadius: '16px',
        dotColorDisabled: colors.primarySuppl,
        boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
    },

    // 开关
    Switch: {
        railColor: colors.borderColor,
        railColorActive: colors.primary,
        railColorDisabled: colors.borderColorLight,
        buttonColor: colors.cardColor,
        buttonColorDisabled: colors.borderColor,
        boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
    },

    // 滑动选择器
    Slider: {
        railColor: `rgba(99, 102, 241, 0.2)`,
        railColorHover: `rgba(99, 102, 241, 0.3)`,
        fillColor: colors.primary,
        fillColorHover: colors.primaryHover,
        handleColor: colors.cardColor,
        handleBoxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
        handleBoxShadowHover: '0 2px 6px 0 rgba(0, 0, 0, 0.3)',
        handleBoxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.2)`,
        handleBoxShadowActive: '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
        dotColor: colors.cardColor,
        dotBorder: `1px solid ${colors.borderColor}`,
        dotBoxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.12)',
        dotColorActive: colors.primary,
    },

    // 评分
    Rate: {
        itemColor: `rgba(99, 102, 241, 0.2)`,
        itemColorActive: colors.warning,
        itemColorHover: colors.warningHover,
    },

    // 表单
    Form: {
        labelTextColor: colors.textBase,
        feedbackTextColorError: colors.error,
        feedbackTextColorWarning: colors.warning,
        blankHeightSmall: '24px',
        blankHeightMedium: '28px',
        blankHeightLarge: '32px',
    },

    // 上传
    Upload: {
        borderRadius: '6px',
        draggerColor: colors.cardColor,
        draggerBorder: `1px dashed ${colors.borderColor}`,
        draggerBorderHover: `1px dashed ${colors.primary}`,
        itemBorderImageCardError: `1px solid ${colors.error}`,
        itemBorderImageCard: `1px solid ${colors.borderColor}`,
    },

    // 颜色选择器
    ColorPicker: {
        color: colors.cardColor,
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '6px',
        panelFontSize: '14px',
        peers: {
            Input: {
                borderRadius: '4px',
            }
        }
    },

    // 提及
    Mention: {
        borderRadius: '6px',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
        color: colors.cardColor,
        peers: {
            InternalSelectMenu: {
                borderRadius: '6px',
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
                color: colors.cardColor,
            }
        }
    },

    // 树型选择器
    TreeSelect: {
        peers: {
            InternalSelection: {
                borderRadius: '6px',
                boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
            },
            Tree: {
                nodeColorActive: `rgba(99, 102, 241, 0.1)`,
                nodeTextColorActive: colors.primary,
            }
        }
    },

    // 自动完成
    AutoComplete: {
        peers: {
            InternalSelection: {
                borderRadius: '6px',
                boxShadowFocus: `0 0 0 2px rgba(99, 102, 241, 0.2)`,
            },
            InternalSelectMenu: {
                borderRadius: '6px',
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
                color: colors.cardColor,
            }
        }
    },

    // 动态输入
    DynamicInput: {
        itemBorderRadius: '6px',
        buttonBorderRadius: '6px',
    },

    // 动态标签
    DynamicTags: {
        peers: {
            Input: {
                borderRadius: '4px',
            },
            Tag: {
                borderRadius: '4px',
            }
        }
    },

    // 穿梭框
    Transfer: {
        itemHeight: '32px',
        borderRadius: '6px',
        borderColor: colors.borderColor,
        headerColor: colors.bodyColor,
    },

    // 数据展示组件
    // ===============================

    // 数据表格
    DataTable: {
        thColor: '#f5f7fa',
        thTextColor: colors.textBase,
        thFontWeight: 500,
        tdColor: colors.cardColor,
        tdColorHover: '#f9f9fc',
        tdColorStriped: '#f5f7fa',
        tdTextColor: colors.textBase,
        borderRadius: '6px',
        boxShadow: 'none',
    },

    // 表格
    Table: {
        borderRadius: '6px',
        thColor: '#f5f7fa',
        thTextColor: colors.textBase,
        tdColor: colors.cardColor,
        tdTextColor: colors.textBase,
    },

    // 树
    Tree: {
        nodeHeight: '28px',
        nodeColorHover: `rgba(99, 102, 241, 0.1)`,
        nodeColorPressed: `rgba(99, 102, 241, 0.15)`,
        nodeColorActive: `rgba(99, 102, 241, 0.1)`,
        arrowColor: colors.textTertiary,
        nodeTextColor: colors.textBase,
        nodeTextColorActive: colors.primary,
    },

    // 列表
    List: {
        borderRadius: '6px',
        color: colors.cardColor,
        textColor: colors.textBase,
        border: `1px solid ${colors.borderColor}`,
    },

    // 日历
    Calendar: {
        borderRadius: '6px',
        titleFontSize: '16px',
        textColor: colors.textBase,
        dayTextColor: colors.textBase,
        dateColor: colors.cardColor,
        dateColorCurrent: colors.primary,
        dateTextColorCurrent: colors.textInverse,
    },

    // 折叠面板
    Collapse: {
        borderRadius: '6px',
        dividerColor: colors.dividerColor,
        titleTextColor: colors.textBase,
        arrowColor: colors.textTertiary,
        textColor: colors.textBase,
    },

    // 统计数值
    Statistic: {
        labelFontSize: '14px',
        valueFontSize: '24px',
        labelTextColor: colors.textSecondary,
    },

    // 描述列表
    Descriptions: {
        borderRadius: '6px',
        labelTextColor: colors.textSecondary,
        labelFontWeight: 500,
        thColor: '#f5f7fa',
        thTextColor: colors.textBase,
        tdColor: colors.cardColor,
        tdTextColor: colors.textBase,
    },

    // 时间线
    Timeline: {
        titleTextColor: colors.textBase,
        contentTextColor: colors.textSecondary,
        lineColor: colors.borderColor,
        iconColor: colors.borderColor,
    },

    // 图像
    Image: {
        borderRadius: '6px',
        previewBoxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        toolbarColor: 'rgba(0, 0, 0, 0.8)',
        toolbarBoxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
    },

    // 徽标
    Badge: {
        color: colors.error,
        textColor: colors.textInverse,
        fontWeightBold: 500,
    },

    // 倒计时
    Countdown: {
        fontSize: '14px',
        fontWeight: 400,
        textColor: colors.textBase,
    },

    // 进度条
    Progress: {
        railColor: `rgba(99, 102, 241, 0.15)`,
        textColorCircle: colors.textBase,
        fontSizeCircle: '24px',
        fontWeightCircle: 500,
    },

    // 东西
    Thing: {
        titleFontSize: '16px',
        titleTextColor: colors.textBase,
        contentTextColor: colors.textSecondary,
        descriptionTextColor: colors.textTertiary,
    },

    // 代码
    Code: {
        textColor: colors.textBase,
        color: colors.bodyColor,
        border: `1px solid ${colors.borderColor}`,
        borderRadius: '4px',
        fontSizeMedium: '14px',
    },

    // 空状态
    Empty: {
        textColor: colors.textTertiary,
        iconColor: colors.borderColor,
        fontSize: '14px',
    },

    // 水印
    Watermark: {
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
        fontSize: '14px',
        textColor: 'rgba(0, 0, 0, 0.15)',
    },

    // 时间
    Time: {
        textColor: colors.textBase,
    },

    // 导航类组件
    // ===============================

    // 菜单
    Menu: {
        itemHeight: '40px',
        itemColorHover: `rgba(99, 102, 241, 0.06)`,
        itemColorActive: `rgba(99, 102, 241, 0.1)`,
        itemColorActiveHover: `rgba(99, 102, 241, 0.15)`,
        itemTextColor: colors.textBase,
        itemTextColorHover: colors.primary,
        itemTextColorActive: colors.primary,
        arrowColor: colors.textTertiary,
        groupTextColor: colors.textTertiary,
    },

    // 下拉菜单
    Dropdown: {
        optionHeight: '32px',
        optionColorHover: `rgba(99, 102, 241, 0.06)`,
        optionTextColor: colors.textBase,
        optionTextColorHover: colors.primary,
        optionTextColorActive: colors.primary,
        borderRadius: '6px',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
        color: colors.cardColor,
    },

    // 分页
    Pagination: {
        itemSize: '30px',
        itemColorActive: colors.primary,
        itemColorHover: `rgba(99, 102, 241, 0.06)`,
        itemTextColor: colors.textBase,
        itemTextColorActive: colors.textInverse,
        itemTextColorHover: colors.primary,
        itemBorder: `1px solid ${colors.borderColor}`,
        itemBorderActive: `1px solid ${colors.primary}`,
        itemBorderDisabled: `1px solid ${colors.borderColorLight}`,
        itemBorderHover: `1px solid ${colors.primary}`,
    },

    // 标签页
    Tabs: {
        tabFontWeightActive: 500,
        tabColor: colors.cardColor,
        tabTextColorHover: colors.primaryHover,
        tabTextColorActive: colors.primary,
        tabTextColor: colors.textSecondary,
        barColor: colors.primary,
        closeColorHover: colors.primaryHover,
        closeColorPressed: colors.primaryPressed,
    },

    // 面包屑
    Breadcrumb: {
        fontSize: '14px',
        fontWeightActive: 500,
        textColor: colors.textTertiary,
        textColorHover: colors.primaryHover,
        textColorActive: colors.primary,
        itemTextColor: colors.textTertiary,
        separatorColor: colors.textTertiary,
    },

    // 步骤
    Steps: {
        indicatorColorProcess: colors.primary,
        indicatorTextColorProcess: colors.textInverse,
        titleTextColor: colors.textBase,
        descriptionTextColor: colors.textTertiary,
        iconSize: '24px',
    },

    // 回到顶部
    BackTop: {
        color: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
        iconColor: colors.textBase,
        textColor: colors.textBase,
        borderRadius: '50%',
    },

    // 锚点
    Anchor: {
        borderRadius: '6px',
        railColor: colors.borderColorLight,
        textColor: colors.textBase,
        textColorHover: colors.primaryHover,
        textColorActive: colors.primary,
        titleTextColor: colors.textBase,
        borderColor: colors.borderColor,
    },

    // 反馈类组件
    // ===============================

    // 提示
    Alert: {
        borderRadius: '6px',
        fontSize: '14px',
        closeIconColor: colors.textTertiary,
        borderWidth: '1px',
        titleFontWeight: 500,
        closeColorHover: 'rgba(0, 0, 0, 0.08)',
        closeColorPressed: 'rgba(0, 0, 0, 0.12)',
    },

    // 对话框
    Dialog: {
        borderRadius: '12px',
        titleFontSize: '18px',
        titleTextColor: colors.textBase,
        titleFontWeight: 500,
        textColor: colors.textBase,
        boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        contentMargin: '16px 0',
        padding: '24px',
    },

    // 抽屉
    Drawer: {
        bodyPadding: '24px',
        borderRadius: '0px',
        headerPadding: '16px 24px',
        boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.18)',
        titleFontSize: '18px',
        titleTextColor: colors.textBase,
        titleFontWeight: 500,
        textColor: colors.textBase,
    },

    // 弹出信息
    Popover: {
        color: colors.cardColor,
        textColor: colors.textBase,
        borderRadius: '6px',
        fontSize: '14px',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
        dividerColor: colors.dividerColor,
    },

    // 文字提示
    Tooltip: {
        color: colors.tooltipColor,
        textColor: colors.textInverse,
        borderRadius: '4px',
        padding: '8px 12px',
    },

    // 信息
    Message: {
        borderRadius: '6px',
        fontSize: '14px',
        textColor: colors.textBase,
        boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        iconMargin: '0 8px 0 0',
        padding: '8px 16px',
        closeFontSize: '14px',
        closeMargin: '0 0 0 12px',
        closeSize: '16px',
    },

    // 通知
    Notification: {
        borderRadius: '6px',
        boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        padding: '16px',
        fontSize: '14px',
        titleFontSize: '16px',
        metaFontSize: '12px',
        descriptionFontSize: '14px',
        closeBorderRadius: '4px',
        closeSize: '16px',
    },

    // 模态框
    Modal: {
        borderRadius: '12px',
        boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        textColor: colors.textBase,
        titleFontSize: '18px',
        titleTextColor: colors.textBase,
        titleFontWeight: 500,
        padding: '24px',
    },

    // 结果
    Result: {
        borderRadius: '6px',
        fontSize: '14px',
        textColor: colors.textBase,
        titleFontSize: '20px',
        titleTextColor: colors.textBase,
        titleFontWeight: 500,
        iconSizeHuge: '64px',
        iconSizeLarge: '48px',
        iconSizeMedium: '32px',
        iconSizeSmall: '24px',
        fontSizeHuge: '16px',
        fontSizeLarge: '16px',
        fontSizeMedium: '14px',
        fontSizeSmall: '13px',
    },

    // 气泡确认框
    Popconfirm: {
        color: colors.cardColor,
        borderRadius: '6px',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
        fontSize: '14px',
        textColor: colors.textBase,
    },

    // 弹出选择
    Popselect: {
        peers: {
            Popover: {
                color: colors.cardColor,
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
            },
            InternalSelectMenu: {
                borderRadius: '6px',
            }
        }
    },

    // 加载中
    Spin: {
        textColor: colors.primary,
        size: '32px',
    },

    // 骨架屏
    Skeleton: {
        color: '#eee',
        colorEnd: '#ddd',
        borderRadius: '4px',
    },

    // 其他组件
    // ===============================

    // 固钉
    Affix: {
        textColor: colors.textBase,
    },

    // 全局配置
    ConfigProvider: {
        peers: {
            Dialog: {
                textColor: colors.textBase,
            },
            Notification: {
                textColor: colors.textBase,
            }
        }
    },

    // 全局样式
    GlobalStyle: {
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
    },

    // 加载条
    LoadingBar: {
        colorLoading: colors.primary,
        colorError: colors.error,
        height: '2px',
    },

    // 主题
    Theme: {
        peers: {
            Tabs: {
                tabTextColorActive: colors.primary,
            }
        }
    },

    // 卡片
    Card: {
        color: colors.cardColor,
        borderRadius: '8px',
        boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06)',
        titleFontSize: '16px',
        titleFontWeight: 500,
        paddingSmall: '12px',
        paddingMedium: '16px',
        paddingLarge: '20px',
    }
}