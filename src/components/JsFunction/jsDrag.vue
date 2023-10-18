<template>
    <div id="app">

        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="列表拖拽" name="first">
                <draggable element="ul" v-model="list">
                    <li v-for="item in list" :key="item.index">{{ item.id }}--{{ item.name }}</li>
                </draggable>
            </el-tab-pane>
            <el-tab-pane label="图片缩放" name="second">
                <div style="width:400px;height:300px">
                    <inc_imgsvg v-if="srcImg" :imgWidth="'80%'">
                        <img :src="srcImg" alt="">
                    </inc_imgsvg>
                </div>
            </el-tab-pane>
            <el-tab-pane label="表格内拖拽" name="third">
                <el-table :data="tableData" ref="tableRef" class="headerName" :height="500">
                    <el-table-column label="序号" type="index"></el-table-column>
                    <el-table-column label="发现问题" prop="label_1"></el-table-column>
                    <el-table-column label="解决问题" prop="value_1"></el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import draggable from 'vuedraggable'//移动
import inc_imgsvg from '../../model/HomeIndex.vue'
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
import Sortable from "sortablejs"
export default {
    components: {
        draggable,
        inc_imgsvg,
        Sortable
    },
    data() {
        return {
            activeName: 'third',
            list: [{
                id: 1,
                name: '第一项'
            }, {
                id: 2,
                name: '第二项'
            }, {
                id: 3,
                name: '第三项'
            }, {
                id: 4,
                name: '第四项'
            }],
            // @ts-ignore
            srcImg: require(`../../assets/img01.gif`),
            newIndexList: [],
            datalist: [],
            tableData: [
                {
                    label_1: 'el-input禁用浏览器密码',
                    value_1: 'show-password autocomplete= "new-password" '
                }, {
                    label_1: '定义表格高度',
                    value_1: 'height="calc(100vh - 250px)"'
                }, {
                    label_1: 'el-input禁用浏览器密码',
                    value_1: 'show-password autocomplete= "new-password" '
                },
            ],
        }
    },
    mounted() {
        this.tableData.forEach(item => {
            // @ts-ignore
            this.newIndexList.push(item.id);
        });
        //阻止火狐拖拽新建新页面
        document.body.addEventListener("drop", (event) => {
            event.preventDefault();
            event.stopPropagation();
        }, false);
        this.initSortableList();
    },
    methods: {
        initSortableList() {
            // @ts-ignore
            let el = this.$refs.tableRef.$el.querySelector('.el-table__body-wrapper tbody');
            //设置配置
            let _this = this
            Sortable.create(el, {
                animation: 150,
                sort: true,
                draggable: '.el-table__row', // 设置可拖拽行的类名(el-table自带的类名)
                forceFallback: true,
                onEnd({ newIndex, oldIndex }) {
                    let currRow = _this.newIndexList.splice(oldIndex, 1)[0];
                    // @ts-ignore
                    _this.newIndexList.splice(newIndex, 0, currRow);
                }
            })

        },
    }
}
</script>
