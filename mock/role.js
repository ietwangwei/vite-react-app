export default [
  {
    url: '/api/getRoleById',
    method: 'get',
    response: () => ({
      code: 0,
      message: 'ok',
      data: {
        roleName: 'admin2',
        roleValue: 'admin'
      }
    })
  }
];
