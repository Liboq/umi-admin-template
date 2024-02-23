const users = [
  { id: 0, name: 'Admin', nickName: 'A', gender: 'MALE', pass: '123456' },
  { id: 1, name: 'zhangsan', nickName: 'Z', gender: 'FEMALE', pass: '123456' },
];
export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },

  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
