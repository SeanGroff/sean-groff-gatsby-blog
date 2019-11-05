---
title: "Unix Permissions Demystified"
date: '2019-11-04'
categories: linux
tags: [linux, unix, terminal, permissions, chmod]
---

### Permission Denied

Permission Denied! If you've used any Unix-Like Operating System you've no doubt seen these two words in the terminal. A quick Google search says to use `chmod /path/to/file 400`. You have no idea what `400` means but you still get the `Permission Denied` error message. You see some posts that say `chmod /path/to/file 777`. You have no idea what `777` means but you no longer receive the `Permission Denied` error! You see some comments mentioning this is a big security risk. You shrug your shoulders and carry on with your day only to repeat this Google search days, weeks, or months later...


### Viewing Permissions

From your terminal type:

```bash
ls -la
```

Sample output from a folder on my computer:

```bash
-rwxrw-rw- 1 sean sean  183 Oct 19 09:55 .somefile
-r-------- 1 sean sean 1696 Nov  3 08:09 NotTopSecret.txt
drwxrwxrwx 1 sean admins  512 Nov  4 19:59 pictures
```

Lets focus only on the left column that has the random looking letters. To decipher what these letters mean we divide them into four groups.

**Group 1**

Group 1 delineates the file type and consists of the first letter or hyphen.

* **`d`** = directory
* **`-`** = file
* **`l`** = symlink

When referring back to the sample output on my computer we now know `.somefile` and `NotTopSecret.txt` are files and `pictures` is a directory.

> You probably already applied common sense and figured this out by looking at the file names but let's move on!

**Note:** The rest of the groups are in groups of three letters in the following order:

* **`r`** = **R**ead
* **`w`** = **W**rite
* **`x`** = E**x**ecute

The **`-`** means can NOT.

**Group 2**

Owner (user) Rights

**Group 3**

Group Rights


**Group 4**

Others Rights - everyone else who is NOT an Owner (user) or Group.

We can now completely decipher the permissions from the sample output:

```bash
-rwxrw-rw- 1 sean sean  183 Oct 19 09:55 .somefile
-r-------- 1 sean sean 1696 Nov  3 08:09 NotTopSecret.txt
drwxrwxrwx 1 sean admins  512 Nov  4 19:59 pictures
```

Let's break down the permissions of `.somefile`. I'm going to separate each group with a pipe (`|`) for clarity.

```
1 | 2 | 3 | 4
 -|rwx|rw-|rw-
```

**Group 1- File Type**

`-` The hyphen tells us `.somefile` is a file.

**Group 2 - Owner**

`rwx` The Owner CAN `R`ead the file, `W`rite to the file, and can E`x`ecute the file.

**Group 3 - Group**

`rw-` The Group CAN `R`ead the file, `W`rite to the file, but can NOT e`x`ecute the file.

**Group 4 - Others**

`rw-` The Others CAN `R`ead the file, `W`rite to the file, but can NOT e`x`ecute the file.

The `.somefile` is a **File** (`-`), the **Owner** can **Read** (`r`) the file, **Write** (`w`) to the file, and can NOT **Execute** (`-`) the file.

### Changing Permissions

To change permissions of a file or directory in Linux or any Unix-like OS we use the `chmod` command. There are two ways to change the permissions of a file or directory. The Text method and the Numeric method. I've never actually seen the Text method used so we are only going to demystify the Numeric method.

### Numeric Method

Read, Write, and Execute each have their own numeric value.

* **`r`** = 4
* **`w`** = 2
* **`x`** = 1
* **`-`** = 0

Total is the sum or `r w x`. You'll see what I mean by "Total" soon.

To understand using the Numeric method visualize the `chmod` command like this:

```bash
chmod /path/to/file {Owner total}{Group total}{Others total}
```

To calculate the `total` for each group you simply add the 3 values of the group to get the sum.

Currently, `stuff.txt` has the following permissions:

```bash
-rwxrw---x
```

Let's calculate the total for each group using the Numeric Values for Read, Write, and Execute.

**Owner**

`rwx` - Read has a value of `4`, Write has a value of `2`, and Execute has a value of `1`. Adding these values gives us a sum of `7`.

Our `Total` for the Owner group is `7`.

**Group**

`rw-` 4 + 2 + 0 = `6`

**Others**

`--x` 0 + 0 + 1 = `1`

The Numeric Value of the `stuff.txt` file is `761`.

### Examples

Bob has a file `secret.pem` and he wants to change this files permissions so only the owner can read the file. Bob does not want ANYONE to write or execute the file. What is the numeric value Bob should use in his `chmod` command?

**Answer**

```bash
chmod secret.pem 400
```

Jane has a script file named `boom.sh`. Jane wants to be able to Read, Write, and Execute the script but Jane does not want anyone else to Read, Write, or Execute the script file. What is the numeric value Jane should use in her `chmod` command?

**Answer**

```bash
chmod boom.sh 700
```

Charles has a file called `index.js` on a server. Charles wants the Owner to be able to Read, Write, but NOT execute the file. Charles wants the Group to be able to Read the file, but NOT Write or Execute. Charles wants all Others to only be able to execute the `index.js` file. What is the numeric value Charles should use in his `chmod` command?

**Answer**

```bash
chmod index.js 641
```

### Unix Permissions Demystified

If you made it this far, the letters and numbers should no longer appear as random magical letters and numbers. Bookmark this blog post to save you a Google search(s). If you enjoyed this blog post feel free to follow along with me on Twitter!
