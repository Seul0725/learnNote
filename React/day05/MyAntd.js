import React, { Component } from 'react';
import { Button, Tree, Table, Tag } from 'antd';
import myAjax from '../myAjax';
const { TreeNode } = Tree;
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        // key: 'name',
        render: text => <Tag color="#f50">{text}</Tag>,
    },
    {
        title: '描述',
        dataIndex: 'comment',
        // key: 'comment',
    },
    {
        title: '父栏目',
        dataIndex: 'parent.name',
        // key: 'parent',
    },
    {
        title: '操作',
        dataIndex: '',
        // key: 'prop',
        render: text => {
            return (
                <React.Fragment>
                    <Tag color="purple">修改</Tag>
                    <Tag color="#f00">删除</Tag>
                </React.Fragment>
            )
        }
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

export default class MyAntd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabelData: []
        }
    }

    componentDidMount() {
        const that = this;
        myAjax('/manager/category/findAllCategory', 'GET', null).then((res) => {
            /* res.data.forEach((item, index) => {
                item.key = index
            }); */
            that.setState({
                tabelData: [...res.data]
            })
        }).catch((err) => {
            console.log(err)
        });
    }
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
                <Tree
                    checkable
                    defaultExpandedKeys={[]}
                    defaultSelectedKeys={['1-0-0']}
                    defaultCheckedKeys={[]}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                >
                    <TreeNode title="Web" key="0-0">
                        <TreeNode title="React" key="0-0-0">
                            <TreeNode title="leaf" key="0-0-0-0" />
                            <TreeNode title="leaf" key="0-0-0-1" />
                        </TreeNode>
                        <TreeNode title="Vue" key="0-0-1">
                            <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                        </TreeNode>
                    </TreeNode>
                    <TreeNode title="Web" key="1-0">
                        <TreeNode title="React" key="1-0-0">
                            <TreeNode title="leaf" key="1-0-0-0" />
                            <TreeNode title="leaf" key="1-0-0-1" />
                        </TreeNode>
                        <TreeNode title="Vue" key="1-0-1">
                            <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="1-0-1-0" />
                        </TreeNode>
                    </TreeNode>
                </Tree>
                <Table rowKey="id" rowSelection={rowSelection} columns={columns} dataSource={this.state.tabelData} />
            </div>
        )
    }
}
