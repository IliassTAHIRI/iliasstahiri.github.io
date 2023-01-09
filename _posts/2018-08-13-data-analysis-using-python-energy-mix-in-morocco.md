---
title: Data analysis using Python
author: Iliass TAHIRI
date: '2018-08-13'
slug: data-analysis-using-python-energy-mix-in-morocco
categories: []
tags: []
subtitle: 'Energy mix in Morocco'
---
The aim of this article is to understand the energy mix in morocco by using the data provided by World Development Indicators dataset from the World Bank.
<!--more-->

The aim of this article is to understand the energy mix in morocco by using the data provided by World Development Indicators dataset from the World Bank. The data contains many important indicators and their variation through the years. Few of this indicators are :

- Teachers in primary education, both sexes (number): SE.PRM.TCHR
- CO2 emissions (kt): EN.ATM.CO2E.KT
- Life expectancy at birth, female (years) : SP.DYN.LE00.FE.IN

Many are other indicators can be found in the dataset that are related to economy, health, education... In the next articles I will try to explore more in details this dataset.



The first step is to read the dataset and import important libraries, we import the data stored in the files : **Country.csv, CountryNotes.csv and Indicators.csv**


```python
#Import Libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from pylab import fill_between

#Read Datasets
country = pd.read_csv('Country.csv')
country_notes = pd.read_csv('CountryNotes.csv')
indicators = pd.read_csv('Indicators.csv')
```

### Energy mix

The next step is to use the indicators on energy in the dataset to obtain the energy mix in Morocco.

#### Preparing data related to energy in Morocco

First we store the data that we need using the Python librairy Pandas. In two steps :

- First we specify the country Code/Name : 'Morocco'
- Second we specify the Indicator code : for example, nuclear energy 'EG.ELC.NUCL.ZS'


```python
df_fosl=indicators[(indicators.CountryName=='Morocco')&(indicators.IndicatorCode=='EG.ELC.FOSL.ZS')]
df_hydro=indicators[(indicators.CountryName=='Morocco')&(indicators.IndicatorCode=='EG.ELC.HYRO.ZS')]
df_nucl=indicators[(indicators.CountryName=='Morocco')&(indicators.IndicatorCode=='EG.ELC.NUCL.ZS')]
df_rnwx=indicators[(indicators.CountryName=='Morocco')&(indicators.IndicatorCode=='EG.ELC.RNWX.ZS')]
```

#### Plottings

To plot the data we use the library matplotlib.

```python
import matplotlib

SMALL_SIZE = 25
matplotlib.rc('font', size=SMALL_SIZE)
matplotlib.rc('axes', titlesize=SMALL_SIZE)

fig = plt.figure(figsize=(20,10))

plt.plot(df_fosl.Year,df_fosl.Value,label='Fossil Fuels')
plt.plot(df_hydro.Year,df_hydro.Value,label='Hydroelectric', color='red')
plt.plot(df_nucl.Year,df_nucl.Value,label='Nuclear')
plt.plot(df_rnwx.Year,df_rnwx.Value,label='Renewable')

fill_between(df_fosl.Year,df_fosl.Value,0,alpha=0.3)
fill_between(df_hydro.Year,df_hydro.Value,0,alpha=0.3, color='red')
fill_between(df_nucl.Year,df_nucl.Value,0,alpha=0.3)
fill_between(df_rnwx.Year,df_rnwx.Value,0,alpha=0.3)

plt.legend(loc=2, borderaxespad=1.,prop={'size': 20})
plt.xlabel('Years',  fontsize=25)
plt.ylabel('% of Total Energy Produce',  fontsize=25)
plt.title('Energy Mix in the Morocco (1971-2012)', fontsize=25)

fig.savefig('energy_mix.svg',format='svg')
```

<p align="center">
<img src="energy_mix.png">
</p>

<div class="figure"><span id="fig:pie"></span>
<img src="energy_mix.png" alt="" width="750" />
<p class="caption">
Figure 1: Energy mix in Morocco between (1975-2012).
</p>
</div>




### Analysis

We observe that the kingdom of Morocco produce the majority of his energy from Fossil fuels. The country doesn't have any oil/gas reserves, subsequently, all the fossil fuel is imported from other producing counties. Efforts are being made to make a transition to renewable energy, but as we can observe the kingdom still have a long way ahead.
