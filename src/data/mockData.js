import DesignIcon from '@icons/design.svg';
import ProjectIcon from '@icons/project.svg';
import KickoffIcon from '@icons/kickoff.svg';
import TeammateIcon from '@icons/design.svg';
import PersonalIcon from '@icons/folder.svg';
import MoreIcon from '@icons/more.svg';

import Person1 from '@images/person1.svg';
import Person2 from '@images/person2.svg';
import Person3 from '@images/person3.svg';
import Person4 from '@images/person4.svg';
import Person5 from '@images/person5.svg';
import Designer from '@images/design.svg';
import AvatarPic from '@images/avatar.svg';

export const folders = [
  { path: '/folder1', label: 'Design', icon: DesignIcon },
  { path: '/folder2', label: 'Project Planning', icon: ProjectIcon },
  { path: '/folder3', label: 'Kickoff Ideas', icon: KickoffIcon },
  { path: '/folder4', label: 'New Teammates', icon: TeammateIcon },
  { path: '/folder5', label: 'Personal', icon: PersonalIcon },
  { path: '/folder6', label: 'View More (2)', icon: MoreIcon },
];

export const labels = [{ label: 'Label1' }, { label: 'Label2' }];

export const newEmails = [
  {
    id: 1,
    subject: 'Introducing 2 New Teammates',
    image: Person1,
    from: 'Amber Jervis',
    content:
      'Hey everyone! Exciting news today. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    attachment: null,
    count: undefined,
  },
  {
    id: 2,
    subject: 'Shared: Style ideas',
    image: Person2,
    from: 'Danielle Pulleyn',
    content:
      'What do you think of the new styles? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    attachment: 'downloadUrl',
    count: 2,
  },
  {
    id: 3,
    subject: 'What do you think of the new design?',
    image: Person3,
    from: 'Amy Davis',
    content:
      'Rosalia responded. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: true,
    attachment: null,
    count: 5,
  },
  {
    id: 4,
    subject: 'Invitation: Design Crit @ Every Tuesday 3pm - 4pm',
    image: Person4,
    from: 'Rosalia Fernandez',
    content:
      'Hey everyone! Exciting news today. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: true,
    attachment: null,
    count: 5,
    updatedCount: 3,
  },
  {
    id: 5,
    subject: 'Demo Plan',
    image: Person1,
    from: 'Amber Jervis',
    content:
      'We are putting together a demo plan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: true,
    attachment: null,
    count: 2,
  },
  {
    id: 6,
    subject: 'Challenge of Client Request',
    image: Person5,
    from: 'Kay Lee',
    content:
      'Have you seen the most recent reply from Joseph? consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    attachment: null,
    count: undefined,
  },
  {
    id: 7,
    subject: 'Great Chat Yesterday',
    image: Person4,
    from: 'Rosalia Fernandez',
    content:
      'Thanks for your time yesterday. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    attachment: null,
    count: undefined,
  },
  {
    id: 8,
    subject: 'Introducing 2 New Teammates',
    image: Person1,
    from: 'Amber Jervis',
    content:
      'Hey everyone! Exciting news today. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    attachment: null,
    count: undefined,
  },
];

export const seenEmails = [
  {
    id: 9,
    subject: 'Introducing 2 New Teammates',
    image: Person1,
    from: 'Amber Jervis',
    content:
      'Hey everyone! Exciting news today. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    attachment: null,
    count: undefined,
  },
  {
    id: 10,
    subject: 'Shared: Style ideas',
    image: Person2,
    from: 'Danielle Pulleyn',
    content:
      'What do you think of the new styles? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    attachment: 'downloadUrl',
    count: 2,
  },
  {
    id: 11,
    subject: 'What do you think of the new design?',
    image: Person3,
    from: 'Amy Davis',
    content:
      'Rosalia responded. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: true,
    attachment: null,
    count: 5,
  },
  {
    id: 12,
    subject: 'Invitation: Design Crit @ Every Tuesday 3pm - 4pm',
    image: Person4,
    from: 'Rosalia Fernandez',
    content:
      'Hey everyone! Exciting news today. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: true,
    attachment: null,
    count: 5,
    updatedCount: 3,
  },
];

export const overdueEmails = [
  {
    id: 13,
    subject: 'Shared: Re: Thoughts on these styles',
    image: Person2,
    from: 'Danielle Pulleyn',
    content:
      'What do you think of the new styles? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    attachment: 'downloadUrl',
    count: 2,
    dueDate: '2021-03-08',
    priority: 'medium',
    hasNotification: true,
    projectTags: 'Design',
    sprint: 'Sprint 5',
  },
];

export const dueTodayEmails = [
  {
    id: 14,
    subject: 'Shared: Style ideas',
    image: Person2,
    from: 'Danielle Pulleyn',
    content:
      'What do you think of the new styles? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    dueDate: '2021-06-24',
    priority: 'High',
    presentation: 'some URL',
  },
  {
    id: 15,
    subject: 'Shared: Style ideas',
    image: Person2,
    from: 'Danielle Pulleyn',
    content:
      'What do you think of the new styles? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc erat, dapibus id semper a, ornare sit amet odio. Integer luctus enim eget arcu vehicula ultricies.',
    time: new Date(),
    hasCalendar: false,
    attachment: 'downloadUrl',
    count: 2,
    dueDate: '2021-06-23',
    priority: 'Low',
  },
];

export const userProfiles = [
  {
    id: 1,
    name: 'Matt Demarest',
    email: 'matt@company.com',
    image: AvatarPic,
  },
  {
    id: 2,
    name: 'Design',
    email: 'design@company.com',
    image: Designer,
  },
];

export const myRules = [
  {
    id: 1,
    subject: 'photo',
    from: 'Ella Jones',
    type: 'Sender',
    image: Person1,
    placeIn: 'Today',
    labels: ['Photo'],
    markAsRead: false,
  },
  {
    id: 2,
    from: 'SurveySparrow',
    type: 'Sender',
    image: Person2,
    placeIn: 'Updates',
    markAsRead: true,
  },
  {
    id: 3,
    from: 'Case Study Club',
    type: 'Sender',
    image: Person3,
    placeIn: 'Case Studies',
    markAsRead: true,
  },
  {
    id: 4,
    from: 'Design',
    type: 'Receiver',
    placeIn: 'Team Crit',
    markAsRead: true,
    subject: 'crit, feedback',
    image: Person4,
  },
];

export const suggestions = [
  {
    id: 1,
    from: 'Amber Javis',
    to: 'Updates',
    image: Person3,
  },
  {
    id: 2,
    from: 'Survey Sparrow',
    to: 'Inbox',
    image: Person5,
  },
];
