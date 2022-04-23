# Online-Calculator
In My project I have Created a Calculator including both Ordinary and Scientific Calculator
#include <stdio.h>
#include <math.h>
int main()
{
printf("=========Welcome to the Calculator=========\n1.Simple Calculator\n2.Scientific Calculator\n");
int a,b,c,d,fact=1,number; float x,y,z,w;
printf("Enter Your Choice :");
scanf("%d",&a);
if(a==1)
{do{
printf("=======Welcome to Simple Calculator========\n1.Addition\n2.Subraction\n3.Multiplication\n4.Division\n5.Modulus\n");
printf("Enter your Choice :");
scanf("%d",&b);
switch(b)
{
case 1:
printf("\nEnter the First Number:");
scanf("%f",&x);
printf("\nEnter the Second Number:");
scanf("%f",&y);
printf("\nSum of %f and %f is %.2f.\n",x,y,(x+y));
break;
case 2:
printf("\nEnter the First Number:");
scanf("%f",&x);
printf("\nEnter the Second Number:");
scanf("%f",&y);
printf("\nDifference of %f and %f is %.2f.\n",x,y,(x-y));
break;
case 3:
printf("\nEnter the First Number:");
scanf("%f",&x);
printf("\nEnter the Second Number:");
scanf("%f",&y);
printf("\nMultipication of %f and %f is %.2f.\n",x,y,(x*y));
break;
case 4:
printf("\nEnter the First Number:");
scanf("%f",&x);
printf("\nEnter the Second Number:");
scanf("%f",&y);
printf("\nDivision of %f by %f is %.2f.\n",x,y,(x/y));
break;
case 5:
printf("\nEnter the First Number:");
scanf("%d",&c);
printf("\nEnter the Second Number:");
scanf("%d",&d);
printf("\nModulus of %d by %d is %d.\n",c,d,(c%d));
break;
default:
printf("\nInvalid Choice !!!!\n Please Try Again.\n");
}
} while(a!=0);}
else if(a==2)
{do{
printf("=======Welcome to Scientific Calculator========\n1.Sine of the Number\n2.Cosine of the Number\n3.Tangent of the Number\n4.Logarithm of the Number\n5.Square Root of the Number\n6.Exponetial of the Number\n7.Power of the Number\n8.Inverse of the Number\n9.Factorial of the Number\n10.Cosecant of the Number\n11.Secant of the Number\n12.Cot of the Number\n");
printf("Enter your Choice :");
scanf("%d",&c);
switch(c)
{
case 1:
printf("\nEnter the Number:");
scanf("%f",&z);
printf("\nThe Sine of %f is %.2f.\n",z,sin(z));
break;
case 2:
printf("\nEnter the Number:");
scanf("%f",&z);
printf("\nThe Cosine of %f is %.2f.\n",z,cos(z));
break;
case 3:
printf("\nEnter the Number:");
scanf("%f",&z);
printf("\nThe Tangent of %f is %.2f.\n",z,tan(z));
break;
case 4:
printf("\nEnter the Number:");
scanf("%f",&z);
printf("\nThe Logarithm of %f is %.2f.\n",z,log(z));
break;
case 5:
printf("\nEnter the Number:");
scanf("%f",&z);
printf("\nThe Square Root of %f is %.2f.\n",z,sqrt(z));
break;
case 6:
printf("\nEnter the Number:");
scanf("%f",&z);
printf("\nThe Exponential of %f is %.2f.\n",z,exp(z));
break;
case 7:
printf("\nEnter the Number:");
scanf("%f",&z);
printf("\nEnter its Power:");
scanf("%d",&d);
printf("\nThe Power of %f is %.2f.\n",z,pow(z,d));
break;
case 8:
printf("\nEnter the Number:");
scanf("%f",&z);
printf("\nThe Inverse of %f is %.2f.\n",z,(1/z));
break;
case 9:
printf("Enter a number: ");
scanf("%d",&number);
for(c=1;c<=number;c++){
fact=fact*c;
}
printf("\nThe Factorial of %d is %d.\n",number,fact);
break;
case 10:
printf("\nEnter the Number:");
scanf("%f",&z);
w=1/sin(z);
printf("\nThe Cosecant of %f is %.2f.\n",z,w);
break;
case 11:
printf("\nEnter the Number:");
scanf("%f",&z);
w=1/cos(z);
printf("\nThe Secant of %f is %.2f.\n",z,w);
break;
case 12:
printf("\nEnter the Number:");
scanf("%f",&z);
w=1/tan(z);
printf("\nThe Cot of %f is %.2f.\n",z,w);
break;
default:
printf("\nInvalid Choice !!!\n Please Try Again\n");
}
}while(a!=0);}
else
printf("\nInvalid Choice !!!\n Please Try Again\n");
}
