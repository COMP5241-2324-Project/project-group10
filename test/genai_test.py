import unittest
from unittest.mock import patch, MagicMock
import gemini.gemini as gemini


class TestGemini(unittest.TestCase):
    def test_generate_other(self):
        gemini.model = MagicMock()
        gemini.model.generate_content.return_value = 'Test response'
        chartext = 'test chartext'
        response = 'test response'
        expected_response = 'Test response'

        actual_response = gemini.generate_other(chartext, response)

        self.assertEqual(actual_response, expected_response)

    def test_generate_std_score(self):
        gemini.model = MagicMock()
        gemini.model.generate_content.return_value = 'Test response'
        user_name = 'test_user'
        user_contribution = 10
        user_commit = 5
        user_issue = 2
        user_create = 3
        expected_response = 'Test response'

        actual_response = gemini.generate_std_score(user_name, user_contribution, user_commit, user_issue, user_create)

        self.assertEqual(actual_response, expected_response)


    def test_generate_group_score(self):
        gemini.model = MagicMock()
        gemini.model.generate_content.return_value = 'Test response'
        group_name = 'test_group'
        group_star = 30
        group_commit = 25
        group_issue = 10
        group_fork = 10
        group_watch = 3
        group_pull = 4
        user_list = [{'user_name':'ninowang'}]
        expected_response = 'Test response'

        actual_response = gemini.generate_group_score(group_name, group_star, group_fork, group_commit, group_issue, group_watch, group_pull, user_list)

        self.assertEqual(actual_response, expected_response)
        

if __name__ == '__main__':
    unittest.main()