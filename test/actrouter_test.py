import unittest
from flask import json
from backend import create_app

class TestActRoutes(unittest.TestCase):
    def setUp(self):
        self.app = create_app()  
        self.client = self.app.test_client() 

    def test_get_org_info(self):
        user_id = '156639687'  
        response = self.client.get(f'/act/get_acts/{user_id}')  
        data = json.loads(response.data)  

        self.assertEqual(response.status_code, 200)  
        self.assertEqual(data['code'], 200)  # 检查响应数据中的 'code'
        self.assertEqual(data['flag'], True)  # 检查响应数据中的 'flag'
        self.assertEqual(data['message'], "查询成功")  # 检查响应数据中的 'message'
        self.assertIsInstance(data['data'], dict)  # 检查 'data' 是否是一个字典
        self.assertIsInstance(data['data']['total'], int)  # 检查 'total' 是否是一个整数
        self.assertIsInstance(data['data']['rows'], list)  # 检查 'rows' 是否是一个列表

if __name__ == '__main__':
    unittest.main()