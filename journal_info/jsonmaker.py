## converts .tsv list of journals to dictionary ##
import pandas as pd
import json
import os

currentDirectory =os.path.dirname(os.path.realpath(__file__))

# function to make stuffs
def writejson(inf,outf):	
	with open(os.path.join(currentDirectory,inf), mode='r') as infile:
		journaltsv = pd.read_csv(infile,sep='\t',header=0)
		infile.close()
	with open(os.path.join(currentDirectory,outf), mode='w') as f:
		journaldict = {row['journal']:{'issn':row['issn'],'url':row['url']} for index, row in journaltsv.iterrows()}
		json.dump(journaldict,f,indent=4)
		f.close()
# journals confirmed available at UCSB
writejson('journals.tsv','journals.json')

# journals confirmed unavailable at UCSB
writejson('journals-unavailable.tsv','journals-unavailable.json')
