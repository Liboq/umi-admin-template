// 运行时配置
import { BulbOutlined, LogoutOutlined } from '@ant-design/icons';
import { RunTimeLayoutConfig, useNavigate } from '@umijs/max';
import { Dropdown, MappingAlgorithm, MenuProps, theme } from 'antd';
import { useAntdConfigSetter } from 'umi';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
  avatar: string;
}> {
  return {
    name: 'pikachu',
    avatar:
      'https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?',
  };
}

const { darkAlgorithm, defaultAlgorithm } = theme;

export const Layout: RunTimeLayoutConfig = ({ initialState }) => {
  const navigate = useNavigate();
  const setAntdConfig = useAntdConfigSetter();

  const DropdownItems: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
    {
      key: 'theme',
      icon: <BulbOutlined />,
      label: '切换主题',
    },
  ];
  const DropdownOnClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'logout':
        navigate('/login');
      case 'theme':
        setAntdConfig((config) => {
          const algorithm = config.theme!.algorithm as MappingAlgorithm[];
          if (algorithm && algorithm.includes(darkAlgorithm)) {
            config.theme!.algorithm = [defaultAlgorithm];
          } else {
            config.theme!.algorithm = [darkAlgorithm];
          }
          return config;
        });
    }
  };
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    antd: {
      configProvider: {},
    },
    title: 'hot',
    layout: 'mix', //菜单的方式，有mix,top,side三种，这里用mix
    splitMenus: true, // 这里用了mix才会生效,bia
    avatarProps: {
      src: initialState?.avatar || undefined, //右上角头像
      title: initialState?.name || '用户', //右上角名称
      size: 'small',
      render: (props, dom) => {
        return (
          <Dropdown
            menu={{
              items: DropdownItems,
              onClick: DropdownOnClick,
            }}
          >
            {dom}
          </Dropdown>
        );
      },
    },
  };
};