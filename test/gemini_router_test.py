import unittest
from flask import json
from backend import create_app  

class TestGenaiRoutes(unittest.TestCase):
    def setUp(self):
        self.app = create_app()  
        self.client = self.app.test_client()  

    def test_generate_group_info(self):
        # 创建一个测试的 POST 数据
        post_data = {
            "data": {
                "repo_name": "test_repo",
                "repo_fork": 10,
                "repo_starts": 20,
                "repo_watch": 5,
                "repo_issues": 2,
                "repo_pull": 3,
                "repo_commites": 50,
                "cur_time": "2022-01-01 00:00:00",
                "users": [{'user_name': 'test_user'}]
            }
        }
        response = self.client.post('/genai/genai_group', data=json.dumps(post_data), content_type='application/json')  # 发送 POST 请求
        data = json.loads(response.data)  

        self.assertEqual(response.status_code, 200)  # 检查 HTTP 状态码
        self.assertEqual(data['code'], 200)  # 检查响应数据中的 'code'
        self.assertEqual(data['flag'], True)  # 检查响应数据中的 'flag'
        self.assertEqual(data['message'], "Group score generated successfully")  # 检查响应数据中的 'message'
        self.assertIsInstance(data['data'], dict)  # 检查 'data' 是否是一个字典


if __name__ == '__main__':
    unittest.main()