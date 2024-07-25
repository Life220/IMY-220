#ifndef DESSSERT_H
#define DESSSERT_H

#include "Course.h"

class Dessert : public Course
{
    public:
    Dessert(int maxNumberOfItems);
    void recommendedBeverage();
};
#endif
