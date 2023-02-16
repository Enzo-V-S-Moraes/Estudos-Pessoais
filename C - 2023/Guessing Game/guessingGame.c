/*
* file: guessingGame.c
* description: file with guessing game programmed in C
* file compilation: press <F6>
*/

/* includes selected libraries for code */
#include <stdio.h>

/* fuunction main of the code */
int main()
{

/* print game header */
printf("********************************\n");
printf("* Welcome to my guessing game *\n");
printf("********************************\n");

/* variables */
int secretnumber = 42;
int guess;

/* loop */
for(int i = 1; i <= 5; i++)
{
    /* asking the player about the secret number */
    printf("%d attempt of 5\n", i);
    printf("What is your guess? ");
    scanf("%d", &guess);
    printf("Your guess was %d\n", guess);

    /* playing with variables */
    int gotcha = (guess == secretnumber);

    /* applies a condition line to code */
    if(gotcha)
    {
        printf("Congratulations! You got it!\n");
        printf("Play again, you're a good player!\n");

        /* make the code stop */
        break;
    }
    else 
    {
        int higher = guess > secretnumber;
        if(higher)
        {
            printf("Your guess was higher than the secret number\n");
            printf("You missed!\n");
            printf("But don't be sad, try again!\n");
        }
        else
        {
            printf("Your guess was lower than the secret number\n");
            printf("You missed!\n");
            printf("But don't be sad, try again!\n");
        }
    }

    /* make the program pause and clean screen */
    system("pause");
    system("clear || cls");

}

/* print on screen the end of game */
printf("End of Game!\n");

}