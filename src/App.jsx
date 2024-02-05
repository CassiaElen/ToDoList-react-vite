import { useState } from 'react';
import { Layout, theme } from 'antd';
import Logo from './components/Logo.jsx';
import MenuList from './components/MenuList.jsx';
import { MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import { Input} from 'antd';
import { FaUser, FaBell } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import Cards from './components/Cards.jsx';
import Grafico from './components/Grafico.jsx';
import Progress from './components/Progress.jsx';

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const { Header, Sider, Content } = Layout;
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);



  const {
    token: { ColorBgContainer },
  } = theme.useToken();
  return (

    <Layout>
      <Sider collapsed={collapsed} collapsible trigger={null}  className='sidebar'>
        <Logo />
        <MenuList darkTheme={darkTheme} />
      </Sider>
      <Layout>
        <Header className='header' style={{ padding: 0, background: ColorBgContainer }}>
          <button type='text' className='toggle' onClick={() => setCollapsed(!collapsed)} >{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</button>
          <div className='nav-header'>
            <Search placeholder="pesquisar" onSearch={onSearch} style={{ width: 300 }} />
            <FaBell className='icon-header' />
            <FaUser className='icon-header' />
            <ImExit className='icon-header' />
          </div>
        </Header>
        <Layout>
          <Content className='content'>
            <div className='card-data'>
              <Cards titulo="amet consectetur" valor={21314} legenda="aborum in ea corrupti" largura={500} altura={300} />
              <Cards titulo="adipisicing elit" valor={21314} legenda="beatae perspiciatis similique" largura={500} altura={300}/>
              <Cards titulo="Cupiditate error" valor={21314} legenda="officiis quidem veniam rerum" largura={500} altura={300}/>
            </div>
            <div className='card-data'>
              <Grafico />
              <Progress largura={570} altura={400} titulo='micciang acredfy' />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>

  );
}

export default App;
