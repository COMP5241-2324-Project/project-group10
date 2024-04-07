import unittest
from flask import json
from backend import create_app 

class TestOrgRoutes(unittest.TestCase):
    def setUp(self):
        self.app = create_app()  
        self.client = self.app.test_client()  

    def test_get_org_info(self):
        teacher_name = 'bot' 
        response = self.client.get(f'/org/get_orgs/{teacher_name}')  
        data = json.loads(response.data)  

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['code'], 200)  
        self.assertEqual(data['flag'], True)  
        self.assertIsInstance(data['data'], dict)

if __name__ == '__main__':
    unittest.main()