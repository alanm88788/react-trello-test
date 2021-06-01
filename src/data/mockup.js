const STATUS = {
  dacklog: 'Backlog',
  design: 'Design',
  todo: 'ToDo',
  doing: 'Doing',
};

const cards = [
  {
    id: '1',
    content: 'Sometimes life is scary and dark',
    status: STATUS.dacklog,
  },
  {
    id: '2',
    content: 'Sucking at something is the first step towards being sorta good at something.',
    status: STATUS.design,
  },
  {
    id: '3',
    content: "You got to focus on what's real, man",
    status: STATUS.design,
  },
  {
    id: '4',
    content: 'Is that where creativity comes from? From sad biz?',
    status: STATUS.todo,
  },
  {
    id: '5',
    content: 'Homies help homies. Always',
    status: STATUS.todo,
  },
  {
    id: '6',
    content: 'Responsibility demands sacrifice',
    status: STATUS.doing,
  },
  {
    id: '7',
    content: "That's it! The answer was so simple, I was too smart to see it!",
    status: STATUS.doing,
  },
  {
    id: '8',
    content: "People make mistakes. It's all a part of growing up and you never really stop growing",
    status: STATUS.todo,
  },
  {
    id: '9',
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
    status: STATUS.todo,
  },
  {
    id: '10',
    content: 'I should not have drunk that much tea!',
    status: STATUS.doing,
  },
  {
    id: '11',
    content: 'Please! I need the real you!',
    status: STATUS.doing,
  },
  {
    id: '12',
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    status: STATUS.doing,
  },
];

export const cardMap = Object.values(STATUS).reduce(
  (previous, status) => ({
    ...previous,
    [status]: cards.filter((card) => card.status === status),
  }),
  {}
);
