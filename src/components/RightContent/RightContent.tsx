import { BulbOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, message } from 'antd';

const RightContent = () => {
  const DropdownItems: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
    {
      key: 'theam',
      icon: <BulbOutlined />,
      label: '切换主题',
    },
  ];
  const DropdownOnClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return (
    <Dropdown
      menu={{
        items: DropdownItems,
        onClick: DropdownOnClick,
      }}
    ></Dropdown>
  );
};
export default RightContent;
