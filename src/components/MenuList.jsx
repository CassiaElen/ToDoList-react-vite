import { Menu } from 'antd';
import { AppstoreAddOutlined, AreaChartOutlined, BarsOutlined, HomeOutlined, PayCircleOutlined, SettingOutlined } from '@ant-design/icons';

const MenuList = ({darkTheme}) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>

            <Menu.Item key="activity" icon={<AppstoreAddOutlined />}>
                Atividade
            </Menu.Item>
            <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title='tarefas'>
                <Menu.Item key="task-1"> Tarefa 1</Menu.Item>
                <Menu.Item key="task-2"> Tarefa 2</Menu.Item>
                <Menu.SubMenu key="subtask" title="sub tarefas">
                <Menu.Item key="subtask-1"> sub Tarefa 1</Menu.Item>
                <Menu.Item key="subtask-2"> sub Tarefa 2</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>

            <Menu.Item key="progress" icon={<AreaChartOutlined />}>
                Progresso
            </Menu.Item>

            <Menu.Item key="payment" icon={<PayCircleOutlined />}>
                Pagamento
            </Menu.Item>

            <Menu.Item key="setting" icon={<SettingOutlined />}>
                Configurações
            </Menu.Item>
        </Menu>
    );
};

export default MenuList