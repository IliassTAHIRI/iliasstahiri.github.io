---
title: COVID 19 - Morocco
author: Iliass TAHIRI
date: 2018-12-03
slug: data-science
categories: []
tags: []
subtitle: ''
---

<!--more-->

## Where data come from ?
Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE) provide a useful data repository hosted on Github. To construct and update this database, JHU CSSE collect everyday informations from WHO, China CDC, US CDC, European Centre for Disease Prevention and Control (ECDC) and other more. They also provide a visual dashboard based on their collected data.

## Data exploration

The dataset provided by JHU CSSE begins from 22/01/2020 and updated on a daily basis.


## Data exploration



```python
confirmed_df = pd.read_csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')
deaths_df = pd.read_csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv')
recoveries_df = pd.read_csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv')
latest_data = pd.read_csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-02-2020.csv')
```


## Total confirmed cases
![Recoveries in Morocco from COVID-19](/img/Cases.jpg)

## Deaths

![Deaths in Morocco from COVID-19](/img/Fatalities.jpg)


## Deaths and recoveries

![Deaths and recoveries in Morocco from COVID-19](/img/Fatalities_recov.jpg)

## The SIR epidemic model

The SIR epidemic model can predict the spread of an epedimic spread in a fixed population. The equations describing this spread were derived by [Kermack and McKendrick, 1927](https://royalsocietypublishing.org/doi/abs/10.1098/rspa.1927.0118) in their article "A contribution to the mathematical theory of epidemics". Their model is composed of three differencial equations:

$$
\frac{\mathrm{d}S }{\mathrm{d} t} = -\frac{\beta S I}{N}
$$

$$
\frac{\mathrm{d}I }{\mathrm{d} t} = \frac{\beta S I}{N} -\gamma I
$$

$$
\frac{\mathrm{d}R }{\mathrm{d} t} = \gamma I
$$

With:\
S(t) is the number of population susceptible to be infected\
I(t) is the number of population infected\
R(t) is the number of population recovered and now immune to the disease


I will not present the technicalities to solve this equation in this post, but you can find plenty of codes available to solve this problem. Nevertheless here is a useful link: [Scipython.com - The SIR epidemic model](https://scipython.com/book/chapter-8-scipy/additional-examples/the-sir-epidemic-model/).
