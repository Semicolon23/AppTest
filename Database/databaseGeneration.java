import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class databaseGeneration {


	public static void main(String[] args) throws IOException
	{
		try
		{
			//READS FILE (CSV only)
			Scanner s = new Scanner(new File("*********INPUT FILE*********"));
			PrintWriter f = new PrintWriter(new FileWriter(new File("*********OUTPUT FILE*********")));
			//outputs the query statements into the output file (txt)
			
			
			s.nextLine(); //skips labels
		
			s.useDelimiter(","); //how it segments the information
			
			while(s.hasNextLine())
			{
				Scanner l = new Scanner(s.nextLine());
				l.useDelimiter(","); //how it segments the information
				
				String str = //place general query template here
						"INSERT INTO support(name,supreme, buyback, reflex, effect)"
						+ " VALUES ('" + 
								l.next() + "','" + l.next() + "','"  + l.next() + "','" 
						+ l.next() + "','" + l.next() + "');";
						
				f.println(str);
				System.out.println(str); //test
			}
			
			f.flush(); //generates the output file
		}

		catch(FileNotFoundException e)
		{
			System.out.println("Error: File not Found");
		}

	}
}
