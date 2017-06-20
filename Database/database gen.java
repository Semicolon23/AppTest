import java.util.Scanner;

public class generate{
	
	public static void main(String [] args)
	{
		try
		{
		
		Scanner s = new Scanner(new File("Arena Cards edit csv.csv"));
		
		while(s.hasNextLine())
		{
			string s = s.nextLine();
			System.out.println(s);
		}
		}
		
		catch(FileNotFoundException e)
		{
			System.out.println("Error: File not Found");
		}
		
	}
}