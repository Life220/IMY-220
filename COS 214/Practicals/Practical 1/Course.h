#ifndef COURSE_H
#define COURSE_H

#include "MenuItem.h"
#include <vector>

using namespace std;

class Course
{
    protected:
    string description;
    int maxNumberOfItems;
    vector<MenuItem*> menuItems;

    public:
    Course(string description, int maxNumberOfItems);
    bool addMenuItem(string description, float price, int stock);
    void printMenuItems();
    void printInventory();
    MenuItem* getMenuItem(int index);
    virtual void recommendBeverage();
    ~Course();
};
#endif
