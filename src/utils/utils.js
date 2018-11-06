import React from 'react'
import {Select} from 'antd'
const Option = Select.Option;

export default {
    formateDate(time){
        if(!time)return '';
        let date = new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+ 
        (date.getHours() < 10 ? '0' + date.getHours():date.getHours()) +':'+ 
        (date.getMinutes() < 10 ? '0' + date.getMinutes():date.getMinutes()) +':'+
        (date.getSeconds() < 10 ? '0' + date.getSeconds():date.getSeconds());
    },
    pagination(data, callback){
        return {
            onChange: (current)=>{
                callback(current)
            },
            current: data.result.page,
            pageSize: data.result.page_size,
            total: data.result.total_count,
            showTotal: ()=>{
                return `共${data.result.total_count}条`
            },
            showQuickJumper: true
        }
    },
    getOptionList(data){
        if(!data){
            return [];
        }
        let options = [] //[<Option value="0" key="all_key">全部</Option>]
        data.map((item, i) => 
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        )
        return options;
    },

    /** 
     * ETable 行点击通用函数
     * @param {*选中行的索引} selectedRowKeys
     * @param {*选中行对象} selectedItem
     */
    updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
        if (selectedIds) {
            this.setState({
                selectedRowKeys,
                selectedIds: selectedIds,
                selectedItem: selectedRows
            })
        } else {
            this.setState({
                selectedRowKeys,
                selectedItem: selectedRows
            })
        }
    },
}