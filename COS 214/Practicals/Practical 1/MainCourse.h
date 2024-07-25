#ifndef MAINCOURSE_H
#define MAINCOURSE_H

#include "Course.h"

class MainCourse : public Course
{
    public:
    MainCourse(int maxNumberOfItems);
    void recommendedBeverage();
};
#endif
