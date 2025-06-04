<template>
  <div class="test-container">
    <transition name="fade" appear>
      <h1 class="animated-title">Naive UI 主题覆盖测试</h1>
    </transition>

    <div>
      <h1 class="text-3xl font-bold bg-green-500">
        Tailwindcss 样式测试
      </h1>
    </div>

    <transition name="slide-up" appear>
      <n-button @click="showInfoMessage" class="animated-button">点我显示消息提示</n-button>
    </transition>

    <!-- 表单组件部分 -->
    <n-divider>表单组件</n-divider>

    <transition name="fade" appear>
      <h3>按钮组件</h3>
    </transition>
    <div class="component-row">
      <transition-group name="stagger-fade" tag="div" class="button-group">
        <n-button type="primary" key="btn1" class="animated-button">主要按钮</n-button>
        <n-button type="info" key="btn2" class="animated-button">信息按钮</n-button>
        <n-button type="success" key="btn3" class="animated-button">成功按钮</n-button>
        <n-button type="warning" key="btn4" class="animated-button">警告按钮</n-button>
        <n-button type="error" key="btn5" class="animated-button">错误按钮</n-button>
      </transition-group>
    </div>

    <transition name="fade" appear>
      <h3>输入类组件</h3>
    </transition>
    <div class="component-row">
      <transition-group name="stagger-slide-up" tag="div" class="input-group">
        <n-input placeholder="输入框" key="input1" class="animated-input" />
        <n-input-number placeholder="数字输入框" key="input2" class="animated-input" />
        <n-select placeholder="下拉选择" :options="options" style="width: 180px" key="input3" class="animated-input" />
      </transition-group>
    </div>

    <div class="component-row">
      <transition-group name="stagger-slide-up" tag="div" class="input-group" :style="{ '--stagger-delay': '300ms' }">
        <n-cascader placeholder="级联选择" :options="cascaderOptions" style="width: 200px" key="input4" class="animated-input" />
        <n-date-picker type="date" placeholder="日期选择" key="input5" class="animated-input" />
        <n-time-picker placeholder="时间选择" key="input6" class="animated-input" />
      </transition-group>
    </div>

    <transition name="fade" appear>
      <h3>选择与开关组件</h3>
    </transition>
    <div class="component-row">
      <transition name="fade-scale" appear>
        <div class="animated-card">
          <n-checkbox>复选框</n-checkbox>
          <n-checkbox checked>已选中</n-checkbox>
        </div>
      </transition>
      <transition name="fade-scale" appear>
        <div class="animated-card">
          <n-radio-group v-model:value="radioValue">
            <n-radio-button value="1">选项一</n-radio-button>
            <n-radio-button value="2">选项二</n-radio-button>
            <n-radio-button value="3">选项三</n-radio-button>
          </n-radio-group>
        </div>
      </transition>
      <transition name="fade-scale" appear>
        <div class="animated-card">
          <n-switch v-model:value="switchValue" />
          <span class="ml-2">{{ switchValue ? '开' : '关' }}</span>
        </div>
      </transition>
    </div>

    <div class="component-row">
      <transition name="slide-right" appear>
        <div style="width: 300px" class="animated-card">
          <n-slider v-model:value="sliderValue" :step="1" />
          <div class="text-center">滑块值: {{ sliderValue }}</div>
        </div>
      </transition>
      <transition name="slide-left" appear>
        <n-rate v-model:value="rateValue" class="animated-card" />
      </transition>
    </div>

    <transition name="fade" appear>
      <h3>表单与上传</h3>
    </transition>
    <div class="component-row">
      <transition name="slide-up" appear>
        <n-form :model="formValue" label-placement="left" label-width="auto" style="width: 500px" class="animated-card">
          <n-form-item label="用户名" path="username">
            <n-input v-model:value="formValue.username" />
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input v-model:value="formValue.password" type="password" />
          </n-form-item>
        </n-form>
      </transition>

      <transition name="fade-scale" appear>
        <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" class="animated-card">
          <n-button>上传文件</n-button>
        </n-upload>
      </transition>
    </div>

    <!-- 数据展示组件部分 -->
    <n-divider>数据展示组件</n-divider>

    <transition name="fade" appear>
      <h3>卡片与表格</h3>
    </transition>
    <div class="component-row">
      <transition name="fade-scale" appear>
        <n-card title="卡片标题" style="width: 300px" class="animated-card hover-lift">
          这是一个卡片内容，查看边框、阴影和颜色是否符合预期。
          <template #footer>卡片底部</template>
        </n-card>
      </transition>

      <transition name="slide-up" appear>
        <n-data-table :columns="columns" :data="tableData" style="width: 500px" class="animated-card" />
      </transition>
    </div>

    <transition name="fade" appear>
      <h3>树与列表</h3>
    </transition>
    <div class="component-row">
      <transition name="slide-right" appear>
        <n-tree :data="treeData" style="width: 300px" class="animated-card" />
      </transition>

      <transition name="slide-left" appear>
        <n-list style="width: 300px" class="animated-card">
          <n-list-item v-for="i in 3" :key="i" class="animated-list-item">
            <n-thing title="列表项标题">
              <template #description>列表项的描述信息</template>
              这是列表项的内容，用于测试列表组件的样式覆盖效果。
            </n-thing>
          </n-list-item>
        </n-list>
      </transition>
    </div>

    <transition name="fade" appear>
      <h3>折叠面板与统计</h3>
    </transition>
    <div class="component-row">
      <transition name="slide-up" appear>
        <n-collapse style="width: 400px" class="animated-card">
          <n-collapse-item title="第一项" name="1">
            这是第一个折叠面板的内容
          </n-collapse-item>
          <n-collapse-item title="第二项" name="2">
            这是第二个折叠面板的内容
          </n-collapse-item>
        </n-collapse>
      </transition>

      <transition name="fade-scale" appear>
        <div class="animated-card">
          <n-statistic label="活跃用户">
            <n-number-animation :from="0" :to="1234" />
          </n-statistic>
        </div>
      </transition>
    </div>

    <transition name="fade" appear>
      <h3>时间线与徽标</h3>
    </transition>
    <div class="component-row">
      <transition name="slide-right" appear>
        <n-timeline class="animated-card">
          <n-timeline-item type="success" title="成功事件">成功完成任务</n-timeline-item>
          <n-timeline-item type="info" title="信息事件">收到新的消息</n-timeline-item>
          <n-timeline-item type="warning" title="警告事件">系统资源不足</n-timeline-item>
          <n-timeline-item type="error" title="错误事件">操作失败</n-timeline-item>
        </n-timeline>
      </transition>

      <transition name="slide-left" appear>
        <div class="animated-card">
          <n-badge :value="5">
            <n-avatar />
          </n-badge>
          <n-badge dot class="ml-4">
            <n-avatar />
          </n-badge>
        </div>
      </transition>
    </div>

    <transition name="fade" appear>
      <h3>进度条与代码</h3>
    </transition>
    <div class="component-row">
      <transition name="slide-up" appear>
        <div style="width: 300px" class="animated-card">
          <n-progress type="line" :percentage="70" />
          <n-progress type="circle" :percentage="70" class="mt-2" />
        </div>
      </transition>

      <transition name="slide-up" appear>
        <n-code code="const theme = 'customized';" language="javascript" style="width: 300px" class="animated-card" />
      </transition>
    </div>

    <!-- 导航组件部分 -->
    <n-divider>导航组件</n-divider>

    <transition name="fade" appear>
      <h3>菜单与标签页</h3>
    </transition>
    <div class="component-row" style="flex-direction: column">
      <transition name="slide-right" appear>
        <n-menu :options="menuOptions" style="width: 600px" class="animated-card" />
      </transition>

      <transition name="slide-left" appear>
        <n-tabs type="line" class="mt-4 animated-card" style="width: 600px">
          <n-tab-pane name="tab1" tab="标签页1">标签页1的内容</n-tab-pane>
          <n-tab-pane name="tab2" tab="标签页2">标签页2的内容</n-tab-pane>
          <n-tab-pane name="tab3" tab="标签页3">标签页3的内容</n-tab-pane>
        </n-tabs>
      </transition>
    </div>

    <transition name="fade" appear>
      <h3>面包屑与分页</h3>
    </transition>
    <div class="component-row">
      <transition name="slide-right" appear>
        <n-breadcrumb class="animated-card">
          <n-breadcrumb-item>首页</n-breadcrumb-item>
          <n-breadcrumb-item>分类</n-breadcrumb-item>
          <n-breadcrumb-item>详情</n-breadcrumb-item>
        </n-breadcrumb>
      </transition>

      <transition name="slide-left" appear>
        <n-pagination :page-count="10" :default-page="2" class="animated-card" />
      </transition>
    </div>

    <transition name="fade" appear>
      <h3>步骤与锚点</h3>
    </transition>
    <div class="component-row" style="flex-direction: column">
      <transition name="fade-scale" appear>
        <n-steps :current="2" style="width: 600px" class="animated-card">
          <n-step title="步骤1" description="描述信息1" />
          <n-step title="步骤2" description="描述信息2" />
          <n-step title="步骤3" description="描述信息3" />
          <n-step title="步骤4" description="描述信息4" />
        </n-steps>
      </transition>

      <div style="height: 100px"></div>
    </div>

    <!-- 反馈组件部分 -->
    <n-divider>反馈组件</n-divider>

    <transition name="fade" appear>
      <h3>提示与对话框</h3>
    </transition>
    <div class="component-row">
      <transition name="slide-up" appear>
        <n-alert title="成功提示" type="success" class="animated-card">
          这是一条成功提示信息
        </n-alert>
      </transition>

      <transition name="fade-scale" appear>
        <div class="animated-card">
          <n-button @click="showDialog = true" class="animated-button">打开对话框</n-button>
          <n-dialog
              v-model:show="showDialog"
              title="对话框标题"
              content="这是对话框的内容，用于测试对话框样式"
              positive-text="确认"
              negative-text="取消"
          />
        </div>
      </transition>
    </div>

    <transition name="fade" appear>
      <h3>工具提示与结果</h3>
    </transition>
    <div class="component-row">
      <transition name="slide-right" appear>
        <n-tooltip trigger="hover" class="animated-card">
          <template #trigger>
            <n-button class="animated-button">鼠标悬停</n-button>
          </template>
          这是一个工具提示内容
        </n-tooltip>
      </transition>

      <transition name="fade-scale" appear>
        <n-result status="success" title="操作成功" description="成功的结果描述" class="animated-card" />
      </transition>
    </div>

    <transition name="fade" appear>
      <h3>骨架屏与加载中</h3>
    </transition>
    <div class="component-row">
      <transition name="slide-up" appear>
        <n-skeleton text :repeat="3" style="width: 300px" class="animated-card" />
      </transition>

      <transition name="fade-scale" appear>
        <div class="animated-card">
          <n-spin size="large" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import {h, ref} from 'vue'
import { themeOverrides } from '@/theme/themeConfig'

// 表单数据
const radioValue = ref('1')
const switchValue = ref(true)
const sliderValue = ref(50)
const rateValue = ref(3)
const formValue = ref({
  username: '',
  password: ''
})

// 选项数据
const options = [
  { label: '选项一', value: 1 },
  { label: '选项二', value: 2 },
  { label: '选项三', value: 3 }
]

const cascaderOptions = [
  {
    label: '广东省',
    value: 'guangdong',
    children: [
      {
        label: '广州市',
        value: 'guangzhou'
      },
      {
        label: '深圳市',
        value: 'shenzhen'
      }
    ]
  },
  {
    label: '江苏省',
    value: 'jiangsu',
    children: [
      {
        label: '南京市',
        value: 'nanjing'
      },
      {
        label: '苏州市',
        value: 'suzhou'
      }
    ]
  }
]

import { message } from '@/utils/message'
import IconFont from "@/components/common/IconFont.vue";

const showInfoMessage = () => {
  // 顺序显示各种消息类型，带有延迟效果
  message.info('这是一条信息提示')
  setTimeout(() => message.success('操作成功'), 500)
  setTimeout(() => message.warning('注意事项'), 1000)
  setTimeout(() => message.error('操作失败'), 1500)

  // 带加载状态的消息
  setTimeout(() => {
    const loadingMsg = message.loading('正在加载...')
    setTimeout(() => {
      loadingMsg.destroy()
      message.success('加载完成')
    }, 2000)
  }, 2000)
}

// 表格数据
const columns = [
  {title: '姓名', key: 'name'},
  {title: '年龄', key: 'age'},
  {title: '地址', key: 'address'}
]

const tableData = [
  {name: '张三', age: 28, address: '北京市朝阳区'},
  {name: '李四', age: 32, address: '上海市浦东新区'}
]

// 树形数据
const treeData = [
  {
    label: '一级节点',
    key: '1',
    children: [
      {
        label: '二级节点 1',
        key: '1-1'
      },
      {
        label: '二级节点 2',
        key: '1-2'
      }
    ]
  },
  {
    label: '一级节点 2',
    key: '2'
  }
]

// 菜单数据
const menuOptions = [
  {
    label: '首页',
    key: 'home',
    icon: () => h('div', {class: 'i-home'})
  },
  {
    label: '组件',
    key: 'components',
    children: [
      {
        label: '表单组件',
        key: 'form'
      },
      {
        label: '数据展示组件',
        key: 'data'
      }
    ]
  },
  {
    label: '关于',
    key: 'about'
  }
]

// 对话框控制
const showDialog = ref(false)
</script>

<style scoped>
.test-container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.component-row {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: flex-start;
}

.button-group,
.input-group {
  display: flex;
  gap: 24px;
  width: 100%;
}

.mt-2 {
  margin-top: 8px;
}

.mt-4 {
  margin-top: 16px;
}

.ml-2 {
  margin-left: 8px;
}

.ml-4 {
  margin-left: 16px;
}

.text-center {
  text-align: center;
}

/* 基础过渡动画 */
.animated-card,
.animated-button,
.animated-input,
.animated-title,
.animated-list-item {
  will-change: transform, opacity;
}

/* 悬停动画效果 */
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 淡入动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 向上滑入 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* 向下滑入 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 从右侧滑入 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 从左侧滑入 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* 缩放淡入 */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* 交错动画 (Staggered) - 用于列表项 */
.stagger-fade-enter-active {
  transition: all 0.3s ease;
  transition-delay: calc(0.05s * var(--index));
}

.stagger-fade-enter-from {
  opacity: 0;
}

/* 交错向上滑入 */
.stagger-slide-up-enter-active {
  transition: all 0.3s ease;
  transition-delay: calc(var(--stagger-delay, 0.05s) * var(--index));
}

.stagger-slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* 列表项动画 */
.animated-list-item {
  transition: all 0.3s ease;
}

.animated-list-item:hover {
  transform: translateX(5px);
  background-color: rgba(99, 102, 241, 0.05);
}
</style>