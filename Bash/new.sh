#! /usr/bin/bash
read -p "enter name:" name
read -sp "password:" pass
echo 
if [ $pass -eq 1234 ]
then
echo "WELCOME $name"
else
echo "wrong password"
fi

# echo $1 $2 $3 "> echo $1 $2 $3"
# args="$@"
# echo $@
# echo $#
# echo ${args[0]} ${args[1]} ${args[2]}
# echo $1 $2 $3 "> echo $1 $2 $3"
# echo $1 "is" $2
# echo "Enter name :"
# read name
# echo "Entered name : $name"

# read -p "user name: "  usr
# read -sp "passeword:" pass
# echo 
# echo "user name: $usr"
# echo "password: $pass"

# echo "enter names: "
# read -a names
# echo "names: ${names[2]}"