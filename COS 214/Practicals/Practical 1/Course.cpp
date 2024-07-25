#include "Course.h"
#include <vector>

Course::Course(string description, int maxNumberOfItems)
{
    this->description = description;
    this->maxNumberOfItems = maxNumberOfItems;
    this->menuItems = new vector<MenuItem>[maxNumberOfItems];
}

bool Course::addMenuItem(string description, float price, int stock)
{
    if (description == "")
        return false;

    maxNumberOfItems++;
    menuItems[maxNumberOfItems] = new MenuItem(description, price, stock);
    return true;
}

void Course::printMenuItems()
{
    int ascii = 97;
    for (int k = 0; k < maxNumberOfItems; k++)
        cout << "\t" << static_cast<char>(ascii++) << ". " << "\t" << menuItems[k]->getDescription() << endl;
}

MenuItem* Course::getMenuItem(int index)
{
    if (index > 0 || index >= maxNumberOfItems)
        return nullptr;

    return menuItems[index];
}

Course::~Course()
{
    for (int k = 0; k < maxNumberOfItems; k++)
        delete menuItems[k];
}
