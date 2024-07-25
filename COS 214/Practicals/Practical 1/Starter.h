#ifndef STARTER_H
#define STARTER_H

#include "Course.h"

class Starter : public Course
{
    public:
    Starter(int maxNumberOfItems);
    void recommendedBeverage();
};
#endif
