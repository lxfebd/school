
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // �¹���(feature)
        'fix', // �޲�bug
        'docs', // �ĵ�(documentation)
        'style', // ��ʽ����ʽ(��Ӱ��������еı䶯)
        'refactor', // �ع�(�������������ܣ�Ҳ�����޸�BUG�Ĵ���)
        'perf', // �Ż���أ������������ܡ�����
        'test', // ��Ӳ���
        'ci', // ���������޸�
        'chore', // �������̻������ߵı䶯
        'revert', // �ع�����һ���汾
        'workflow', // �������Ľ�
        'mod', // ��ȷ��������޸�
        'wip', // ������
        'types', // �����޸�
        'release' // �汾����
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
