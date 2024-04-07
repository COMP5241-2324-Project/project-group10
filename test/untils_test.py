import unittest
import requests_mock
from backend.controller.untils import getorg_id, get_commites, get_commiters, get_user_pulls, get_user_issues, get_pulls, get_team, get_issues  # 请将 'backend' 替换为你的模块的名字

class TestUntilFunctions(unittest.TestCase):
    @requests_mock.Mocker()
    def test_getorg_id(self, m):
        m.get('https://api.github.com/orgs/test_org', json={'id': 123})
        org_id = getorg_id('test_org')
        self.assertEqual(org_id, 123)

    @requests_mock.Mocker()
    def test_get_commites(self, m):
        m.get('https://api.github.com/repos/test_owner/test_repo/commits', json=[{}, {}, {}])
        commits = get_commites('test_repo', 'test_owner')
        self.assertEqual(commits, 3)

    @requests_mock.Mocker()
    def test_get_commiters(self, m):
        m.get('https://api.github.com/repos/test_owner/test_repo/contributors', json=[{}, {}, {}])
        committers = get_commiters('test_repo', 'test_owner')
        self.assertEqual(committers, 3)

    @requests_mock.Mocker()
    def test_get_user_pulls(self, m):
        m.get('https://api.github.com/repos/test_owner/test_repo/pulls', json=[{'user': {'login': 'user1'}}, {'user': {'login': 'user1'}}, {'user': {'login': 'user2'}}])
        user_pulls = get_user_pulls('test_repo', 'test_owner')
        self.assertEqual(user_pulls, {'user1': 2, 'user2': 1})

    @requests_mock.Mocker()
    def test_get_user_issues(self, m):
        m.get('https://api.github.com/repos/test_owner/test_repo/issues', json=[{'user': {'login': 'user1'}}, {'user': {'login': 'user1'}}, {'user': {'login': 'user2'}}])
        user_issues = get_user_issues('test_repo', 'test_owner')
        self.assertEqual(user_issues, {'user1': 2, 'user2': 1})

    @requests_mock.Mocker()
    def test_get_pulls(self, m):
        m.get('https://api.github.com/repos/test_owner/test_repo/pulls?state=open', json=[{}, {}])
        m.get('https://api.github.com/repos/test_owner/test_repo/pulls?state=close', json=[{}])
        m.get('https://api.github.com/repos/test_owner/test_repo/pulls?state=all', json=[{}, {}, {}])
        open_pulls, close_pulls, all_pulls = get_pulls('test_repo', 'test_owner')
        self.assertEqual(open_pulls, 2)
        self.assertEqual(close_pulls, 1)
        self.assertEqual(all_pulls, 3)

    @requests_mock.Mocker()
    def test_get_team(self, m):
        m.get('https://api.github.com/repos/test_owner/test_repo/teams', json=[{'name': 'team1'}, {'name': 'team2'}])
        team = get_team('test_repo', 'test_owner')
        self.assertEqual(team, 'team1')

    @requests_mock.Mocker()
    def test_get_issues(self, m):
        m.get('https://api.github.com/repos/test_owner/test_repo/issues?state=close', json=[{}, {}])
        m.get('https://api.github.com/repos/test_owner/test_repo/issues?state=all', json=[{}, {}, {}])
        all_issues, close_issues = get_issues('test_repo', 'test_owner')
        self.assertEqual(all_issues, 3)
        self.assertEqual(close_issues, 2)

if __name__ == '__main__':
    unittest.main()