#!/usr/bin/env python3

# This script is used to generate
# https://gist.github.com/b4577d38163676ab434421e0dda3ed3f
#
# DO NOT TOUCH IT! - Marek

import re
from collections import namedtuple, defaultdict
from enum import Enum, unique
from datetime import datetime


@unique
class Status(Enum):
    in_works = 0
    waiting_for_review = 1
    under_review = 2
    to_correct = 3
    done = 4
    approved = 5
    removed = 6
    maybe_change = 7

    @classmethod
    def from_value(cls, value):
        value_map = {member.value: member for member in cls}
        return value_map[value]

    def is_done(self):
        return self in (self.done, self.approved)

    def is_under_review(self):
        return self in (self.waiting_for_review, self.under_review,
                        self.to_correct)

Question = namedtuple('Question', 'authors, reviewers, status')


class Stat(object):
    def __init__(self):
        self.answers = 0
        self.done_answers = 0
        self.review = 0
        self.done_review = 0

    def __repr__(self):
        return 'answers: {} ({}) review: {} ({})'.format(
            self.answers, self.done_answers, self.review, self.done_review)

people_map = {
    'Grzesiek': 'Grzegorz Bukowiec',
    'G.Świrski': 'Grzegorz Świrski',
    'gswirski': 'Grzegorz Świrski',
    'Konrad': 'Konrad Kalita',
    'Krukon': 'Wojciech Kruk',
    'Krzysiek': 'Krzysztof Barański',
    'Kuba': 'Kuba Nowak',
    'Larhard': 'Bartłomiej Puget',
    'LJK': 'Leszek Jakub Kania',
    'Maciek': 'Maciek Woźniak',
    'Marek': 'Marek Rusinowski',
    'Michał': 'Michał Ziobro',
    'MuchomorGrabarz': 'Michał Ziobro',
    'NiematojakTomasz': 'Tomasz Krakowiak',
    'Patryk': 'Patryk Gołębiowski',
    'Sylwek': 'Sylwek Klocek',
    'sznaider': 'Mateusz Krawiec',
    'Witek': 'Witek Gawlowski',
    'wodomierz': 'Miron Ficak',
    'knight-erraunt': 'Szymon Śliwa',
    'Kamil': 'Kamil Pietruszka',
    'Szymon-placeholder': '?',
    'Mistar': '(pr) Michał Staromiejski',
    'Marcin Kozik': '(pr) Marcin Kozik',
    'Iwona Cieślik': '(pr) Iwona Cieślik',
    'Gucio': '(pr) Grzegorz Gutowski',
    'Jakub Kozik': '(pr) Jakub Kozik',
    'Tomasz Krawczyk': '(pr) Tomasz Krawczyk'
}


def parse_status_mark(people, status_str):
    people = people.split(',')
    status = Status.from_value(int(status_str))
    authors = [people_map[name.strip()] for name in people[0].split('+')]
    reviewers = [people_map[name.strip()] for name in people[1:]]
    return Question(authors, reviewers, status)


def main():
    questions = []
    question_re = re.compile(r'^  \d+\..*!\[(.*)\]\[(\d)\]$')

    with open('board.md') as f:
        for line in f:
            result = question_re.match(line)
            if result is not None:
                questions.append(parse_status_mark(*result.groups()))

    num_review = 0
    num_done = 0
    num_approved = 0
    num_all = 153
    num_untouched = 0

    people_stat = defaultdict(Stat)
    for q in questions:
        if q.status == Status.in_works:
            continue

        if q.status == Status.maybe_change:
            num_untouched -= 1
            continue

        if q.status == Status.removed:
            num_all -= 1
            continue

        if q.status == Status.approved:
            num_approved += 1

        if q.status.is_done():
            num_done += 1
        elif q.status.is_under_review():
            num_review += 1

        for author in q.authors:
            people_stat[author].answers += 1
            if q.status.is_done():
                people_stat[author].done_answers += 1
        for reviewer in q.reviewers:
            people_stat[reviewer].review += 1
            if q.status.is_done():
                people_stat[reviewer].done_review += 1

    people_stat = sorted(people_stat.items(), key=lambda o: (
        -o[1].answers, -o[1].done_answers, -o[1].review,
        -o[1].done_review, o[0]))

    print('{}\n\nuntouched review done approved all'.format(
        datetime.now().isoformat(' ')))

    num_untouched += num_all - (num_review + num_done)
    print('{:>9} {:>6} {:>4} {:>8} {:>3}'.format(
        num_untouched, num_review, num_done,
        num_approved, num_all))

    print('\n{:<26} | {:>14} | {:>14} '.format('name', 'answers (done)',
                                             'review (done)'))
    print('{}+{}+{}'.format('-' * 27, '-' * 16, '-' * 16))
    for name, stat in people_stat:
        answers = '{} ({})'.format(stat.answers, stat.done_answers)
        reviews = '{} ({})'.format(stat.review, stat.done_review)
        print('{:<26} | {:>14} | {:>13}'.format(name, answers, reviews))

if __name__ == '__main__':
    main()
