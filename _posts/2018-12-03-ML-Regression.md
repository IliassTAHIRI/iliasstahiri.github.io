---
title: Machine leaning - Regression
author: Iliass TAHIRI
date: 2018-12-03
slug: kaggle-data-science
categories: []
tags: []
subtitle: ''
---

Titanic predictions

<!--more-->

#What is Kaggle ?

The simple way to describe Kaggle is as data science plateform.

What is not: a plateform for already estalished and expert data scientists. As matter of fact, Kaggle is made for everybody, beginners will find a lot of material to learn from the best and experts will use their expertise to compete on big projects and also find job oportunities.

#What is machine learning
There are two types main types of machine learning:
Supervised and unsupervides.

#How can it be applied to Titanic
Machine learning techniques can be applied to Titanic to predict based on some intry parameters weather a passenger will survive or not. This is a classification supervised learning problem, because we want the output is category: died or survived. To do that, we need to train a model on 80% of our data and leave 20% to test weather our model will predict correctly or not.

#Data exploration

```python
#import important libraries
import matplotlib as plt
import pandas as pd
```

First we need to read our data:

```python
#import train and test CSV files
train = pd.read_csv("../input/train.csv")
test = pd.read_csv("../input/test.csv")
```


#

Apply it to the titanic disaster
